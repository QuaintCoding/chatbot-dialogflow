import React from 'react'
import { List, Icon, Avatar } from 'antd';

function NoticeListComponent(message) {

    const AvatarSrc = message.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

    const contents = message.content.payload.fields.richContent.listValue.values[0].listValue.values;

    const jsonObj1 = contents[1].structValue.fields;
    const jsonObj2 = contents[3].structValue.fields;
    const jsonObj3 = contents[5].structValue.fields;
    const jsonObj4 = contents[7].structValue.fields;

    return (< List.Item style={{ padding: '1rem' }}>
        <List.Item.Meta
            avatar={<Avatar icon={AvatarSrc} />}
            title={message.who}
            description={
                <div>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj1.actionLink.stringValue}>{jsonObj1.title.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj2.actionLink.stringValue}>{jsonObj2.title.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj3.actionLink.stringValue}>{jsonObj3.title.stringValue}</a>}
                            />
                        </List.Item>

                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" rel="noopener noreferrer" href={jsonObj4.actionLink.stringValue}>{jsonObj4.title.stringValue}</a>}
                            />
                        </List.Item>

                    </List>
                </div>
            }
        />
    </List.Item >)
}

export default NoticeListComponent;