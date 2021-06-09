import React from 'react'
import { List, Icon, Avatar } from 'antd';


function SmartoperationDepartmentComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[3].structValue.fields;


    return (< List.Item style={{ padding: '1rem' }}>
        <List.Item.Meta
            avatar={<Avatar icon={AvatarSrc} />}
            title={message.who}
            description={
                <div>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj1.link.stringValue}>{jsonObj1.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj2.link.stringValue}>{jsonObj2.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj3.link.stringValue}>{jsonObj3.text.stringValue}</a>}
                            />
                        </List.Item>

                    </List>
                </div>
            }
        />
    </List.Item >)
}

export default SmartoperationDepartmentComponent;