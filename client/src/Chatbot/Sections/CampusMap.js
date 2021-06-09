import React from 'react'
import { List, Card, Icon, Avatar, Button } from 'antd';
const { Meta } = Card;


function CampusMapComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[3].structValue.fields.options.listValue.values[0].structValue.fields;
    const jsonObj4 = richContent.listValue.values[0].listValue.values[3].structValue.fields.options.listValue.values[1].structValue.fields;

    return (

        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <div>
                        <Card
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="alt img"
                                    src={jsonObj1.rawUrl.stringValue}
                                />
                            }
                        >
                            <Meta
                                style={{ padding: 15 }}
                                title={jsonObj2.title.stringValue}
                                description={jsonObj2.subtitle.stringValue}
                            />

                        </Card>
                        <Button style={{ marginRight: 5, marginTop: 5 }} target="_blank" rel="noopener noreferrer" href={jsonObj3.link.stringValue}>
                            {jsonObj3.text.stringValue}
                        </Button>

                        <Button style={{ marginRight: 5, marginTop: 5 }} target="_blank" rel="noopener noreferrer" href={jsonObj4.link.stringValue}>
                            {jsonObj4.text.stringValue}
                        </Button>
                    </div>
                }
            />
        </List.Item>
    )

}

export default CampusMapComponent;