import React from 'react'
import { List, Icon, Avatar } from 'antd';
import eventQuery from '../Chatbot';

function TotalDepartmentComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[3].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[5].structValue.fields;
    const jsonObj4 = richContent.listValue.values[0].listValue.values[7].structValue.fields;

    return (< List.Item style={{ padding: '1rem' }}>
        <List.Item.Meta
            avatar={<Avatar icon={AvatarSrc} />}
            title={message.who}
            description={
                <div>
                    <List>
                        <List.Item onClick={() => {

                        }}>
                            <List.Item.Meta
                                title={jsonObj1.title.stringValue}
                                description={jsonObj1.subtitle.stringValue}
                            />
                        </List.Item>

                        <List.Item onClick={() => {

                        }}>
                            <List.Item.Meta
                                title={<a target="_blank" href={"https://www.naver.com/"}>{jsonObj2.title.stringValue}</a>}
                                description={jsonObj2.subtitle.stringValue}
                            />
                        </List.Item>

                        <List.Item onClick={() => {

                        }}>
                            <List.Item.Meta
                                title={<a target="_blank" href={"https://www.naver.com/"}>{jsonObj3.title.stringValue}</a>}
                                description={jsonObj3.subtitle.stringValue}
                            />
                        </List.Item>

                        <List.Item onClick={() => {

                        }}>
                            <List.Item.Meta
                                title={<a target="_blank" href={"https://www.naver.com/"}>{jsonObj4.title.stringValue}</a>}
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