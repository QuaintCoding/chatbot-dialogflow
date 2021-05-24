import React from 'react'
import { List, Icon, Avatar } from 'antd';


function SocialScienceDepartmentComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[3].structValue.fields;
    const jsonObj4 = richContent.listValue.values[0].listValue.values[4].structValue.fields;
    const jsonObj5 = richContent.listValue.values[0].listValue.values[5].structValue.fields;
    const jsonObj6 = richContent.listValue.values[0].listValue.values[6].structValue.fields;
    const jsonObj7 = richContent.listValue.values[0].listValue.values[7].structValue.fields;
    const jsonObj8 = richContent.listValue.values[0].listValue.values[8].structValue.fields;
    const jsonObj9 = richContent.listValue.values[0].listValue.values[9].structValue.fields;
    const jsonObj10 = richContent.listValue.values[0].listValue.values[10].structValue.fields;
    const jsonObj11 = richContent.listValue.values[0].listValue.values[11].structValue.fields;

    return (< List.Item style={{ padding: '1rem' }}>
        <List.Item.Meta
            avatar={<Avatar icon={AvatarSrc} />}
            title={message.who}
            description={
                <div>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj1.link.stringValue}>{jsonObj1.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj2.link.stringValue}>{jsonObj2.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj3.link.stringValue}>{jsonObj3.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj4.link.stringValue}>{jsonObj4.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj5.link.stringValue}>{jsonObj5.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj6.link.stringValue}>{jsonObj6.text.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj7.link.stringValue}>{jsonObj7.text.stringValue}</a>}
                            />
                        </List.Item>
                        
                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj8.link.stringValue}>{jsonObj8.text.stringValue}</a>}
                            />
                        </List.Item>
                        
                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj9.link.stringValue}>{jsonObj9.text.stringValue}</a>}
                            />
                        </List.Item>
                        
                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj10.link.stringValue}>{jsonObj10.text.stringValue}</a>}
                            />
                        </List.Item>
                        
                        <List.Item>
                            <List.Item.Meta
                                title={<a href={jsonObj11.link.stringValue}>{jsonObj11.text.stringValue}</a>}
                            />
                        </List.Item>
                    </List>
                </div>
            }
        />
    </List.Item >)
}

export default SocialScienceDepartmentComponent;