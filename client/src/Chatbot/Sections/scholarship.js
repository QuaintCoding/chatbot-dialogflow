import React from 'react'
import { List, Card, Icon, Avatar } from 'antd';


function ScholarshipComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <div>
                        <Card
                            style={{ width: 350 }}
                            cover={
                                <img alt="scholarship img" src={jsonObj1.rawUrl.stringValue} />
                            }
                            actions={[
                                <a target="_blank" rel="noopener noreferrer" href={jsonObj2.link.stringValue}>
                                    {jsonObj2.text.stringValue}
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
export default ScholarshipComponent;