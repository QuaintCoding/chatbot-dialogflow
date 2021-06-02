import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

function CafeteriaComponent(message) {

    const fields = message.content.payload.fields.richContent.listValue.values[0].listValue.values[1].structValue.fields;

    return (
        <Card
            style={{ width: 400 }}
            actions={[
                <a target="_blank" rel="noopener noreferrer" href={fields['actionLink'].stringValue}>
                    {fields['actionLink'].stringValue}
                </a>
            ]}
        >
            <Meta

                avatar={
                    <Avatar src="https://cdn.discordapp.com/attachments/823290287639756831/848191219887505418/c4bc32bb04e825ae.png" alt="example" />
                }
                title={
                    fields['title'].stringValue
                }
            />

        </Card>

    )

}

export default CafeteriaComponent;