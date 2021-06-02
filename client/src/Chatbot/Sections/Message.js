import React from 'react'
import { List, Icon, Avatar, Card } from 'antd';
const { Meta } = Card;

// text형 대화에 대한 템플릿 작성
function Message(props) {

    //bot일때랑 user일때랑 icon다르게 하기
    //const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />   <img src={require("../Images/han_bugi2.png")}/>
    const AvatarSrc = props.who === '한성봇' ? <img src={require("../Images/han_bugi2.png")} /> : <Icon type={null} />

    if (props.who === '한성봇') {
        if (!(props.text[0].indexOf('교수님') == -1)) {
            var words = props.text[0].split('\n');
            var word = words[1] + '\n' + words[2] + '\n' + words[3];
            word = word.split('\n').map(line => { return (<span>{line}<br /></span>) })
            console.log(`props: ${words[0]}+'\n'+${words[1]}+'\n'+${words[2]}+'\n'+${words[3]}+'\n'+${words[4]}`)
            return (
                <div>
                    <List.Item style={{ padding: '1rem' }}>
                        <List.Item.Meta
                            avatar={<Avatar icon={AvatarSrc} />}
                            title={props.who}
                            description={
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt={words[0]}
                                            src={words[4]} />
                                    }
                                >
                                    <Meta
                                        title={words[0]}
                                        description={word}
                                    />
                                </Card>

                            }
                        />
                    </List.Item>
                </div>
            )
        }
        else if (!(props.text[0].indexOf('공지\n') == -1)) {
            var words = props.text[0].split('\n');
            return (
                <div>
                    <List.Item style={{ padding: '1rem' }}>
                        <List.Item.Meta
                            avatar={<Avatar icon={AvatarSrc} />}
                            title={props.who}
                            description={
                                <List>
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a target="_blank" href={words[2]}>{words[1]}</a>}
                                        />
                                    </List.Item>

                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a target="_blank" href={words[4]}>{words[3]}</a>}
                                        />
                                    </List.Item>

                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a target="_blank" href={words[6]}>{words[5]}</a>}
                                        />
                                    </List.Item>

                                    <List.Item>
                                        <List.Item.Meta
                                            title={<a target="_blank" href="https://www.hansung.ac.kr/hansung/1819/subview.do">{"더 많은 공지를 보고싶다면 클릭하세요"}</a>}
                                        />
                                    </List.Item>
                                </List>

                            }
                        />
                    </List.Item>
                </div>
            )
        }
        else if (!(props.text[0].indexOf('<->') == -1)) {
            //var words = props.text[0].split(/- |#/);
            var words = props.text[0].split("\n");
            var split = words[10].split("학교");
            return (
                <div>
                    <List.Item style={{ padding: '1rem' }}>
                        <List.Item.Meta
                            avatar={<Avatar icon={AvatarSrc} />}
                            title={props.who}
                            description={
                                <List>
                                    <List.Item>
                                        <List.Item.Meta
                                            title={words[0]}
                                        />
                                    </List.Item>

                                    <List.Item>
                                        {words[1]}
                                    </List.Item>

                                    <List.Item>
                                        {words[2]}
                                    </List.Item>

                                    <List.Item>
                                        {words[3]}
                                    </List.Item>

                                    <List.Item>
                                        {words[4]}
                                    </List.Item>

                                    <List.Item>
                                        {words[5]}
                                    </List.Item>

                                    <List.Item>
                                        {words[6]}
                                    </List.Item>

                                    <List.Item>
                                        {words[7]}
                                    </List.Item>

                                    <List.Item>
                                        {words[8]}
                                    </List.Item>

                                    <List.Item>
                                        {words[9]}
                                    </List.Item>

                                    <List.Item>
                                        {words[10]}
                                    </List.Item>

                                    <List.Item>
                                        {words[11]}
                                    </List.Item>

                                    <List.Item>
                                        <List.Item.Meta
                                            title={words[12]}
                                        />
                                    </List.Item>

                                    <List.Item>
                                        {words[13]}
                                    </List.Item>

                                    <List.Item>
                                        {words[14]}
                                    </List.Item>

                                </List>

                            }
                        />
                    </List.Item>
                </div>
            )
        }
        else {
            return (
                <List.Item style={{ padding: '1rem' }}>
                    <List.Item.Meta
                        avatar={<Avatar icon={AvatarSrc} />}
                        title={props.who}
                        description={props.text}
                    />
                </List.Item>
            )
        }
    }
    else {
        return (
            <List.Item style={{ padding: '1rem', textAlign: 'right' }}>
                <List.Item.Meta style={{}}
                    title={props.who}
                    description={props.text}
                    debugger
                />
            </List.Item>
        )
    }


}

export default Message
