import React from 'react'
import { Card, Icon } from 'antd';
const { Meta } = Card;


function PhonebookComponent(message) {

    const fields = message.content.payload.fields.richContent.listValue.values[0].listValue.values[1].structValue.fields;

    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <a target="_blank" rel="noopener noreferrer" href={fields['actionLink'].stringValue}>
                    <Icon type="ellipsis" key="ellipsis" />
                </a>
            ]}
        >
            <Meta
                title={fields['title'].stringValue}
                description={fields['subtitle'].stringValue}
            />

        </Card>

    )

}

export default PhonebookComponent;