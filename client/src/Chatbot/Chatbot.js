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
    //useSelector??? ?????? state->message->messages??? ?????? ???????????? ???????????? ????????? 
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

    //???????????? ?????? ????????? ????????? Welcome ????????? ??????(???????????? ?????????)
    useEffect(() => {

        eventQuery('Welcome')
        console.log(scrollRef.current);
    }, [scrollRef])

    //text??? keyPressHanlder?????? ???????????? ????????? ?????????
    const textQuery = async (text) => {

        //???????????? ?????? text????????? ??????   
        //dialogflow?????? postman?????? request?????? ?????? ????????? ??????  
        let conversation = {
            who: '?????????',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))

        // ???????????? ?????? ?????? ????????? ??????

        const textQueryVariables = {
            text
        }
        try {
            // /textQuery ??? request????????? 
            // Axios = Node.js??? ?????? Promise API??? ???????????? HTTP ????????? ?????? ???????????????
            //endpoint??? /api/dialogflow/textQuery
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            //????????? ????????? fulfillmentMessages?????? ?????? ????????? ?????? ??????
            //text??? dialogflow?????? ????????? response??? ?????? data??? ??????
            for (let content of response.data.fulfillmentMessages) {

                conversation = {
                    who: '?????????',
                    content: content
                }

                //?????? ????????? redux ???????????? ?????? conversation??? ?????? ????????? ../_actions/message_actions??? ??????
                dispatch(saveMessage(conversation))
            }


        }
        //?????? ??????
        catch (error) {
            conversation = {
                who: '?????????',
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

    //event??? keyPressHanlder?????? ???????????? ????????? ?????????
    const eventQuery = async (event) => {
        //eventQuery??? ???????????? ???????????? ????????? ????????? ??????
        const eventQueryVariables = {
            event
        }
        try {
            // /eventQuery ??? request????????? 
            //endpoint??? /api/dialogflow/eventQuery
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            //text??? dialogflow?????? ????????? response??? ?????? data??? ??????
            for (let content of response.data.fulfillmentMessages) {

                let conversation = {
                    who: '?????????',
                    content: content
                }

                dispatch(saveMessage(conversation))
            }


        }
        //?????? ??????
        catch (error) {
            let conversation = {
                who: '?????????',
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
                return alert('???????????? ????????? ????????? ??????????????????')
            }

            //textQuery????????? ???????????? ????????? text?????????
            textQuery(e.target.value)


            e.target.value = "";
        }
    }

    //????????? ?????????
    const renderOneMessage = (message, i) => {

        // ????????? ????????? ???????????? ?????? if?????? ??????

        // text??? ????????? ?????? Message ????????????(Sections/Message.js??? ?????? ????????? ????????????)
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        }
        else if (message.content && message.content.payload.fields) { // richContent ????????? ??????
            const AvatarSrc = message.who === '?????????' ? <img src={require("./Images/han_bugi2.png")} alt="????????? ?????????" /> : <Icon type={null} />

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

    //????????? 1?????? ?????????????????? ????????? map??? ???????????? renderOneMessage??? ???
    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }

    //????????? ??????(????????? redux??? ????????? ??????????????? ????????? ????????????)
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
