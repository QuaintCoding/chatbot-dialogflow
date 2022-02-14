import React from 'react'
import { List, Card, Icon, Avatar, Button } from 'antd';
const { Meta } = Card;


function DirectionsComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[3].structValue.fields;
    const jsonObj4 = richContent.listValue.values[0].listValue.values[4].structValue.fields.options.listValue.values[0].structValue.fields;
    const jsonObj5 = richContent.listValue.values[0].listValue.values[4].structValue.fields.options.listValue.values[1].structValue.fields;
    const jsonObj6 = richContent.listValue.values[0].listValue.values[4].structValue.fields.options.listValue.values[2].structValue.fields;

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
                                    alt="Direction describe img 1"
                                    src={jsonObj1.rawUrl.stringValue}
                                />
                            }
                        >
                            <Meta
                                title={jsonObj2.title.stringValue}
                                description={jsonObj2.subtitle.stringValue}
                            />

                            <Meta
                                title={jsonObj3.title.stringValue}
                                description={jsonObj3.subtitle.stringValue}
                            />
                        </Card>
                        <Button target="_blank" href={jsonObj4.link.stringValue}>
                            {jsonObj4.text.stringValue}
                        </Button>
<<<<<<< Updated upstream

=======
                        
>>>>>>> Stashed changes
                        <Button target="_blank" href={jsonObj5.link.stringValue}>
                            {jsonObj5.text.stringValue}
                        </Button>
                        <Button target="_blank" href={jsonObj6.link.stringValue}>
                            {jsonObj6.text.stringValue}
                        </Button>
                    </div>
                }
            />
        </List.Item>
    )

}

export default DirectionsComponent;