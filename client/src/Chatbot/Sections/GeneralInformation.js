import React from 'react'
import { Card, Icon } from 'antd';
const { Meta } = Card;

function GeneralInformationComponent(message) {
    const richContent = message.content.payload.fields.richContent;
    const jsonObj1 = richContent.listValue.values[0].listValue.values[1].structValue.fields;
    const jsonObj2 = richContent.listValue.values[0].listValue.values[2].structValue.fields;

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={jsonObj1.accessibilityText.stringValue}
                    src={jsonObj1.rawUrl.stringValue} />
            }
            actions={[
                <a target="_blank" rel="noopener noreferrer" href={jsonObj2.link.stringValue}>
                    click <Icon type="link" key="link" />
                </a>
            ]}
        >
            <Meta
                title={jsonObj2.text.stringValue}
                description={jsonObj2.link.stringValue}
            />

        </Card>

    )
}

export default GeneralInformationComponent;
