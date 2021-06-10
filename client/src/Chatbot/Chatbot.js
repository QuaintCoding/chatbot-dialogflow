import React, { useEffect, useRef } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message';
import { List, Icon, Avatar } from 'antd';
import LaptopComponent from './Sections/laptop';
import WelcomeComponent from './Sections/welcome';
import ICTdesignDepartmentComponent from './Sections/Department/ICTdesignDepartment';
import WifiComponent from './Sections/WifiSetting';
import GlobalFashionDepartmentComponent from './Sections/Department/GlobalFashionDepartment';
import ITConvergenceDepartmentComponent from './Sections/Department/ITConvergenceDepartment';
import SocialScienceDepartmentComponent from './Sections/Department/SocialScienceDepartment';
import ArtdesignDepartmentComponent from './Sections/Department/ArtdesignDepartment';
import SmartoperationDepartmentComponent from './Sections/Department/SmartoperationDepartment';
import DirectionsComponent from './Sections/Directions';
import TotalDepartmentComponent from './Sections/TotalDepartment';
import PhonebookComponent from './Sections/Phonebook';
import EnterUniversityComponent from './Sections/EnterUniversity';
import CreateHumanityDepartmentComponent from './Sections/Department/CreatHumanityDepartment';
import ComputerDepartmentComponent from './Sections/Department/ComputerDepartment';
import HumanityArtCollegeComponent from './Sections/College/HumanityArtCollege'
import SocialScienceCollegeComponent from './Sections/College/SocialScienceCollege';
import DesignCollegeComponent from './Sections/College/DesignCollege';
import EngineeringCollegeComponent from './Sections/College/EngineeringCollege';
import MecatronicsDepartmentComponent from './Sections/Department/MecatronicsDepartment';
import BeautyManagementDepartmentComponent from './Sections/Department/Beauty_Management_Department';
import CafeteriaComponent from './Sections/Cafeteria';
import CalenderComponent from './Sections/AcademicCalender';
import DailyRestaurantMenuComponent from './Sections/DailyRestaurantMenu';
import ProfessorComponent from './Sections/Professor';
import CampusMapComponent from './Sections/CampusMap';
import ScholarshipComponent from './Sections/scholarship';
import GeneralInformationComponent from './Sections/GeneralInformation';
import LeaveReturnComponent from './Sections/LeaveReturn';
import HopePageComponent from './Sections/HopePage';
import RestaurantListComponent from './Sections/RestaurantList';
import NoticeListComponent from './Sections/noticeList';

function Chatbot() {
    const dispatch = useDispatch();
    //useSelector를 통해 state->message->messages에 전체 메시지가 있으므로 가져옴 
    const messagesFromRedux = useSelector(state => state.message.messages)
    // React Reference for 'scrolling to bottom'
    const scrollRef = useRef();
    const scrollToBottom = () => {
        if (scrollRef.current == null || scrollRef.current === undefined) {
            console.log("scrollRef not work")
        }
        else {
            if (scrollRef.current.scrollIntoView == null || scrollRef.current.scrollIntoView === undefined) {
                console.log("scrollIntoView() not work");
                return;
            }

            scrollRef.current.scrollIntoView();
        }
    }

    //사용자가 처음 들어올 때마다 Welcome 이벤트 실행(환영하는 인삿말)
    useEffect(() => {

        eventQuery('Welcome')
        console.log(scrollRef.current);
    }, [scrollRef])

    //text는 keyPressHanlder에서 사용자가 입력한 메시지
    const textQuery = async (text) => {

        //사용자가 보낸 text메시지 처리   
        //dialogflow에서 postman으로 request보낼 때의 형식과 같음  
        let conversation = {
            who: '사용자',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))

        // 챗봇에서 보낸 답변 메시지 처리

        const textQueryVariables = {
            text
        }
        try {
            // /textQuery 로 request보내기 
            // Axios = Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
            //endpoint는 /api/dialogflow/textQuery
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            //정보들 중에서 fulfillmentMessages안에 있는 부분만 받게 처리
            //text를 dialogflow에게 보내고 response에 있는 data를 저장
            for (let content of response.data.fulfillmentMessages) {

                conversation = {
                    who: '한성봇',
                    content: content
                }

                //채팅 정보를 redux 저장하기 위해 conversation에 담긴 정보를 ../_actions/message_actions로 보냄
                dispatch(saveMessage(conversation))
            }


        }
        //에러 처리
        catch (error) {
            conversation = {
                who: '한성봇',
                content: {
                    text: {
                        text: " textQuery Error just occured, please check the problem"
                    }
                }
            }

            dispatch(saveMessage(conversation))


        }
        scrollToBottom();
    }

    //event는 keyPressHanlder에서 사용자가 입력한 메시지
    const eventQuery = async (event) => {
        //eventQuery는 사용자가 입력하지 않아도 응답을 받음
        const eventQueryVariables = {
            event
        }
        try {
            // /eventQuery 로 request보내기 
            //endpoint는 /api/dialogflow/eventQuery
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            //text를 dialogflow에게 보내고 response에 있는 data를 저장
            for (let content of response.data.fulfillmentMessages) {

                let conversation = {
                    who: '한성봇',
                    content: content
                }

                dispatch(saveMessage(conversation))
            }


        }
        //에러 처리
        catch (error) {
            let conversation = {
                who: '한성봇',
                content: {
                    text: {
                        text: " eventQuery Error just occured, please check the problem"
                    }
                }
            }
            dispatch(saveMessage(conversation))
        }

    }


    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('챗봇에게 물어볼 내용을 입력해주세요')
            }

            //textQuery쪽으로 사용자가 입력한 text보내기
            textQuery(e.target.value)


            e.target.value = "";
        }
    }

    //메시지 렌더링
    const renderOneMessage = (message, i) => {

        // 메시지 종류를 구분하기 위한 if문의 나열

        // text형 대화에 대한 Message 컴포넌트(Sections/Message.js에 있는 템플릿 가져오기)
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        }
        else if (message.content && message.content.payload.fields) { // richContent 그대로 왔음
            const AvatarSrc = message.who === '한성봇' ? <img src={require("./Images/han_bugi2.png")} alt="한성봇 이미지" /> : <Icon type={null} />

            var ResultComponent;

            if (message.content.payload.fields.richContent.listValue.values[0].listValue.values[0].structValue.fields["intent"]) {
                const detectedIntent = message.content.payload.fields.richContent.listValue.values[0].listValue.values[0].structValue.fields["intent"].stringValue
                console.log(detectedIntent)

                switch (detectedIntent) {
                    case 'welcome':
                        ResultComponent = WelcomeComponent(message);
                        break;
                    case 'laptop':
                        ResultComponent = LaptopComponent(message);
                        break;
                    case 'wifi_setting':
                        return WifiComponent(message);
                    case 'department_ICTdesign':
                        return ICTdesignDepartmentComponent(message);
                    case 'department_GlobalFashion':
                        return GlobalFashionDepartmentComponent(message);
                    case 'department_ITConvergenceEngineering':
                        return ITConvergenceDepartmentComponent(message);
                    case 'department_SocialScience':
                        return SocialScienceDepartmentComponent(message);
                    case 'department_Artdesign':
                        return ArtdesignDepartmentComponent(message);
                    case 'department_Smartoperation':
                        return SmartoperationDepartmentComponent(message);
                    case 'department_CreatHumanity':
                        return CreateHumanityDepartmentComponent(message);
                    case 'department_Computer':
                        return ComputerDepartmentComponent(message);
                    case 'department_Mechatronics':
                        return MecatronicsDepartmentComponent(message);
                    case 'department_BeautyManagement':
                        return BeautyManagementDepartmentComponent(message);
                    case 'directions':
                        return DirectionsComponent(message);
                    case 'department_Total':
                        return TotalDepartmentComponent(message);
                    case 'campusMap':
                        return CampusMapComponent(message);
                    case 'scholarship':
                        return ScholarshipComponent(message);
                    case 'phonebook':
                        ResultComponent = PhonebookComponent(message);
                        break;
                    case 'enterUniversity':
                        ResultComponent = EnterUniversityComponent(message);
                        break;
                    case 'college_CreatHumanity':
                        return HumanityArtCollegeComponent(message);
                    case 'college_SocialScience':
                        return SocialScienceCollegeComponent(message);
                    case 'college_Design':
                        return DesignCollegeComponent(message);
                    case 'college_Engineering':
                        return EngineeringCollegeComponent(message);
                    case 'cafeteria':
                        ResultComponent = CafeteriaComponent(message);
                        break;
                    case 'academic_Calendar':
                        ResultComponent = CalenderComponent(message);
                        break;
                    case 'notice':
                        return NoticeListComponent(message);
                    case 'mealgaok':
                        return DailyRestaurantMenuComponent(message);
                    case 'staff_restaurant':
                        return DailyRestaurantMenuComponent(message);
                    case 'student_restaurant_alter':
                        return DailyRestaurantMenuComponent(message);
                    case 'restaurant_Total':
                        return RestaurantListComponent(message);
                    case 'professor':
                        return ProfessorComponent(message);
                    case 'hope_page':
                        ResultComponent = HopePageComponent(message);
                        break;
                    case 'general_information':
                        ResultComponent = GeneralInformationComponent(message);
                        break;
                    case 'leave and return':
                        ResultComponent = LeaveReturnComponent(message);
                        break;
                    default:
                        ResultComponent = null;
                }
            }
            else {
                ResultComponent = "Error occured, check Redux"
                console.log("un-known or un-structed Intent")
            }

            return (
                <List.Item style={{ padding: '1rem' }}>
                    <List.Item.Meta
                        avatar={<Avatar icon={AvatarSrc} />}
                        title={message.who}
                        description={ResultComponent}
                    />
                </List.Item>
            )
        }

    }

    //메시지 1개씩 다루어야하기 때문에 map을 사용하고 renderOneMessage에 줌
    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }

    //템플릿 생성(화면에 redux에 저장된 메시지들을 출력해 보여주기)
    return (
        <div style={{
            height: 700, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>
            <div style={{ height: 644, width: '100%', overflow: 'auto', background: '#C9E8FD' }}>

                {renderMessage(messagesFromRedux)}

                <span ref={scrollRef} />

            </div>
            <input
                style={{
                    margin: 0, width: '100%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                }}
                placeholder="Send a message..."
                onKeyPress={keyPressHanlder}
                type="text"
            />

        </div>
    )
}

export default Chatbot;
