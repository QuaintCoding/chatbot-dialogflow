import React from 'react'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveMessage } from '../../_actions/message_actions';
import { List, Icon, Avatar } from 'antd';
<<<<<<< Updated upstream

=======
import textQuery from '../Chatbot';
import keyPressHanlder from '../Chatbot';
>>>>>>> Stashed changes
function TotalDepartmentComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[3].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[5].structValue.fields;
    const jsonObj4 = richContent.listValue.values[0].listValue.values[7].structValue.fields;
/*

    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('챗봇에게 물어볼 내용을 입력해주세요')
            }

<<<<<<< Updated upstream
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

=======
            //textQuery쪽으로 사용자가 입력한 text보내기
            Chatbot.textQuery(e.target.value)


            e.target.value = "";
        }
    }
*/
>>>>>>> Stashed changes
    return (< List.Item style={{ padding: '1rem' }}>
        <List.Item.Meta
            avatar={<Avatar icon={AvatarSrc} />}
            title={message.who}
            description={
                <div>
                    <List>
<<<<<<< Updated upstream
                        <List.Item onClick={() => {
                            textQuery("크리에이티브 인문예술대학")
                        }}>
=======
                        <List.Item onClick={() => textQuery(jsonObj1.title.stringValue)}>
>>>>>>> Stashed changes
                            <List.Item.Meta
                                title={jsonObj1.title.stringValue}
                                description={jsonObj1.subtitle.stringValue}
                            />
                        </List.Item>

<<<<<<< Updated upstream
                        <List.Item onClick={() => {
                            textQuery("미래융합 사회과학대학")
                        }}>
                            <List.Item.Meta
                                title={jsonObj2.title.stringValue}
=======
                        <List.Item onClick={() => console.log()}>
                            <List.Item.Meta
                              title={<a href={keyPressHanlder}>{jsonObj2.title.stringValue}</a>}
>>>>>>> Stashed changes
                                description={jsonObj2.subtitle.stringValue}
                            />
                        </List.Item>

<<<<<<< Updated upstream
                        <List.Item onClick={() => {
                            textQuery("디자인대학")
                        }}>
=======
                        <List.Item onClick={() => console.log()}>
>>>>>>> Stashed changes
                            <List.Item.Meta
                                title={jsonObj3.title.stringValue}
                                description={jsonObj3.subtitle.stringValue}
                            />
                        </List.Item>

                        <List.Item onClick={() => {
                            textQuery("IT공과대학")
                        }}>
                            <List.Item.Meta
                                title={jsonObj4.title.stringValue}
                                description={jsonObj4.subtitle.stringValue}
                            />
                        </List.Item>

                    </List>
                </div>
            }
        />
    </List.Item >)
}

export default TotalDepartmentComponent;