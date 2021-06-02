import React from 'react'
import { List, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;


function WifiComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[3].structValue.fields;

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <div>
                        <Card
                            style={{ width: 500 }}
                            cover={
                                <img
                                    alt="Wifi setting img 1"
                                    src={jsonObj1.rawUrl.stringValue}
                                />
                            }
                        >
                        </Card>
                        <Card
                            style={{ width: 500 }}
                            cover={
                                <img
                                    alt="Wifi setting img 2"
                                    src={jsonObj2.rawUrl.stringValue}
                                />
                            }
                            actions={[
                                <a target="_blank" rel="noopener noreferrer" href={jsonObj3.link.stringValue}>
                                    {jsonObj3.text.stringValue}
                                </a>
                            ]}
                        >
                        </Card>
                    </div>
                }
            />
        </List.Item>
    )

}

export default WifiComponent;