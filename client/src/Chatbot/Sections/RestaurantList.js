import React from 'react'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveMessage } from '../../_actions/message_actions';
import { List, Icon, Avatar } from 'antd';

function RestaurantListComponent(message) {


    const dispatch = useDispatch();

    //text는 keyPressHanlder에서 사용자가 입력한 메시지
    const textQuery = async (text) => {

        //사용자가 보낸 text메시지 처리   
        //dialogflow에서 postman으로 request보낼 때의 형식과 같음  
        let conversation = {
            who: '사용자',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))

        // 챗봇에서 보낸 답변 메시지 처리

        const textQueryVariables = {
            text
        }
        try {
            // /textQuery 로 request보내기 
            // Axios = Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
            //endpoint는 /api/dialogflow/textQuery
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            //정보들 중에서 fulfillmentMessages안에 있는 부분만 받게 처리
            //text를 dialogflow에게 보내고 response에 있는 data를 저장
            for (let content of response.data.fulfillmentMessages) {

                conversation = {
                    who: '한성봇',
                    content: content
                }

                //채팅 정보를 redux 저장하기 위해 conversation에 담긴 정보를 ../_actions/message_actions로 보냄
                dispatch(saveMessage(conversation))
            }


        }
        //에러 처리
        catch (error) {
            conversation = {
                who: '한성봇',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }

            dispatch(saveMessage(conversation))


        }
        //scrollToBottom();
    }

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const contents = message.content.payload.fields.richContent.listValue.values[0].listValue.values;

    const jsonObj1 = contents[1].structValue.fields;
    const jsonObj2 = contents[3].structValue.fields;
    const jsonObj3 = contents[5].structValue.fields;

    return (< List.Item style={{ padding: '1rem' }}>
        <List.Item.Meta
            avatar={<Avatar icon={AvatarSrc} />}
            title={message.who}
            description={
                <div>
                    <List>
                        <List.Item onClick={() => {
                            textQuery(jsonObj1.title.stringValue)
                        }}>
                            <List.Item.Meta
                                title={jsonObj1.title.stringValue}
                            />
                        </List.Item>

                        <List.Item onClick={() => {
                            textQuery(jsonObj2.title.stringValue)
                        }}>
                            <List.Item.Meta
                                title={jsonObj2.title.stringValue}
                            />
                        </List.Item>

                        <List.Item onClick={() => {
                            textQuery(jsonObj3.title.stringValue)
                        }}>
                            <List.Item.Meta
                                title={jsonObj3.title.stringValue}
                            />
                        </List.Item>

                    </List>
                </div>
            }
        />
    </List.Item >)
}

export default RestaurantListComponent;