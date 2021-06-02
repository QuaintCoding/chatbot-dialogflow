import React from 'react'
import { Card, Avatar } from 'antd';
const { Meta } = Card;


function CalenderComponent(message) {

    const fields = message.content.payload.fields.richContent.listValue.values[0].listValue.values[1].structValue.fields;

    return (
        <Card
            style={{ width: 400 }}
            actions={[
                <a target="_blank" rel="noopener noreferrer" href={fields['link'].stringValue}>
                    {fields['link'].stringValue}
                </a>
            ]}
        >
            <Meta
                avatar={
                    <Avatar src="https://cdn.discordapp.com/attachments/823290287639756831/848191211529175050/e5316c1c428ba13d.png" alt="example" />
                }
                title={fields['text'].stringValue}
            //description={fields['subtitle'].stringValue}
            />

        </Card>

    )

}

export default CalenderComponent;