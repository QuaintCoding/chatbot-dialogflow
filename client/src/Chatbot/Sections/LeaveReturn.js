import React from 'react'
import { List, Card, Button } from 'antd';
const { Meta } = Card;

function LeaveReturnComponent(message) {
    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;
    const jsonObj3 = richContent.listValue.values[0].listValue.values[3].structValue.fields;

    return (

        <List.Item >
            <List.Item.Meta
                description={
                    <div>
                        <Card
                            style={{ width: 300 }}
                        >
                            <p>
                                <Meta
                                    title={jsonObj1.title.stringValue}
                                    description={jsonObj1.subtitle.stringValue}
                                />
                            </p>
                            <p>
                                <Meta
                                    title={jsonObj2.title.stringValue}
                                    description={jsonObj2.subtitle.stringValue}
                                />
                            </p>

                        </Card>
                        <Button style={{ marginRight: 5, marginTop: 5 }} target="_blank" rel="noopener noreferrer" href={jsonObj3.options.listValue.values[0].structValue.fields.link.stringValue}> 휴학 안내
                </Button>

                        <Button style={{ marginRight: 5, marginTop: 5 }} target="_blank" rel="noopener noreferrer" href={jsonObj3.options.listValue.values[1].structValue.fields.link.stringValue}> 복학 안내
                 </Button>
                    </div>
                }
            />
        </List.Item>

    )
}

export default LeaveReturnComponent;