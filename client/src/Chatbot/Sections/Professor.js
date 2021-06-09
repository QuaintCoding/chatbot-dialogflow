import React from 'react'
import { List, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

function ProfessorComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const contents = message.content.payload.fields.richContent.listValue.values[0].listValue.values;
    const imgUrl = contents[1].structValue.fields.rawUrl.stringValue;
    const info_arr = contents[2].structValue.fields.title.stringValue.split("\n");
    const professor_name = info_arr[0];

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt={professor_name + " 이미지"}
                                src={imgUrl} />
                        }
                    >
                        <Meta
                            title={professor_name}
                            description={<div>
                                <div>
                                    {info_arr[1]}<br />
                                </div>
                                <div>
                                    {info_arr[2]}<br />
                                </div>
                                <div>
                                    {info_arr[3]}<br />
                                </div>
                            </div>}
                        />
                    </Card>

                }
            />
        </List.Item>
    )

}

export default ProfessorComponent;