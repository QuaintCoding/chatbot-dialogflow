import React from 'react'
import { Row, Col, List, Icon, Card, Avatar } from 'antd';

function setNewLine(string) {
    let arr = string.split("\n");
    if (arr) {
        return <div>{arr.map((mini) => {
            if (mini === "")
                return null;
            return <div>{mini}<br /></div>;
        })}</div>
    } else {
        return null;
    }
}

function DailyRestaurantMenuComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const contents = message.content.payload.fields.richContent.listValue.values[0].listValue.values;

    let intent = contents[0].structValue.fields.intent.stringValue
    if (intent === "student_restaurant") {
        const jsonObj1 = contents[1].structValue.fields;

        return (< List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={setNewLine(jsonObj1.subtitle.stringValue)}
            />
        </List.Item >)

    } else if (intent === "student_restaurant_alter") {
        const jsonObj1 = contents[1].structValue.fields;
        const jsonObj2 = contents[2].structValue.fields;

        return (< List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <Row gutter={20}>
                        <Col span={10}>
                            <Card title={jsonObj1.title.stringValue}>
                                {setNewLine(jsonObj1.subtitle.stringValue)}
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card title={jsonObj2.title.stringValue}>
                                {setNewLine(jsonObj2.subtitle.stringValue)}
                            </Card>
                        </Col>
                    </Row>
                }
            />
        </List.Item >)

    } else if (intent === "staff_restaurant") {
        const jsonObj1 = contents[1].structValue.fields;
        const jsonObj2 = contents[2].structValue.fields;

        return (< List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <div>
                        <List>
                            <List.Item>
                                <List.Item.Meta
                                    title={jsonObj1.title.stringValue}
                                    description={setNewLine(jsonObj1.subtitle.stringValue)}
                                />
                            </List.Item>

                            <List.Item>
                                <List.Item.Meta
                                    title={jsonObj2.title.stringValue}
                                    description={setNewLine(jsonObj2.subtitle.stringValue)}
                                />
                            </List.Item>

                        </List>
                    </div>
                }
            />
        </List.Item >)
    } else if (intent === "mealgaok") {
        const jsonObj1 = contents[1].structValue.fields;

        return (< List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={message.who}
                description={
                    <Row gutter={12}>
                        <Col span={12}>
                            <Card
                                title={
                                    <a target="_blank" rel="noopener noreferrer" href={jsonObj1.actionLink.stringValue}>
                                        {jsonObj1.title.stringValue}
                                    </a>
                                }
                            >
                                {jsonObj1.subtitle.stringValue}
                            </Card>
                        </Col>
                    </Row>
                }
            />
        </List.Item >)
    }
}
export default DailyRestaurantMenuComponent;