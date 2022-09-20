import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PESHeader from '../components/PESHeader';
import BackgroundImage from '../components/BackgroundImage';

// Constants
import {BLACK, GREY, LIGHT_GREY, WHITE, RED} from '../constants/Colors';
import {ABOUT_BANNER} from '../constants/Images';

// Objective & Need Component
const ReusableComponent = ({heading, text}) => {
  return (
    <Text
      style={{
        textAlign: 'left',
        fontFamily: 'Lato-Regular',
        color: GREY,
        fontSize: 15,
        marginTop: 10,
      }}>
      <Text style={{fontFamily: 'Lato-Bold'}}>{heading}: </Text>
      {text}
    </Text>
  );
};

const SingleList = ({lab}) => {
  const width = Dimensions.get('screen').width;

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <Ionicons
        name="checkmark-circle-outline"
        size={17}
        color={RED}
        style={{marginTop: 7, marginRight: 5}}
      />
      <Text
        key={lab}
        style={{
          textAlign: 'left',
          fontFamily: 'Lato-Regular',
          color: GREY,
          fontSize: 15,
          marginTop: 8,
          width: width - 39,
        }}>
        {lab}
      </Text>
    </View>
  );
};

const Labs = ({navigation}) => {
  const width = Dimensions.get('window').width;

  const [tableData, setTableData] = useState({
    HeadTable: ['SR.NO.', 'NAME OF THE LAB', 'LAB IN-CHARGE'],
    WidthArr: [width / 6, width / 2.5, width / 2.7],
    DataTable: [
      ['1', 'Programming Lab-I', 'Mrs. S. A. Kulkarni'],
      ['2', 'Programming Lab-II', 'Ms. D. A. Bhanage'],
      ['3', 'Software Lab-I', 'Mrs. S. S. Bhavsar'],
      ['4', 'Software Lab-II', 'Ms. R. S. Sadafule'],
      ['5', 'Operating System Lab', 'Mrs. Y. D. Fatangare'],
      ['6', 'Network Lab', 'Mr. C. A. Ghuge'],
      ['7', 'Hardware Lab', 'Ms. Poonam Rakibe'],
      ['8', 'Computer Lab', 'Mr. D. A. Patil'],
    ],
  });

  const osl = [
    'To make students knowledgeable by introducing practical concepts of networking and networking devices.',
    'Motivate students for installation and maintenance of various networks.',
    'Assignments are designed to learn implementation of sharing of various peripheral devices such as printers, scanners required in computer networks',
  ];

  const hwl = [
    'Design of various Combinational Circuits.',
    'Design of various Sequential Circuits.',
    'Study of VHDL Programming.',
    'Interfacing of A/D and D/A Converters with Microprocessor 8086 as well as Microcontroller 8051.',
  ];

  return (
    <ScrollView>
      <PESHeader navigation={navigation} />

      <BackgroundImage
        source={ABOUT_BANNER}
        children={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              height: 150,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: WHITE,
                  fontFamily: 'Lato-Bold',
                  fontSize: 20,
                  marginTop: 6,
                }}>
                Labs
              </Text>
            </View>
          </View>
        }
      />

      <View style={{paddingHorizontal: 10}}>
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Name of the Labs
        </Text>
        <Table borderStyle={{borderWidth: 1, borderColor: GREY}}>
          <Row
            data={tableData?.HeadTable}
            widthArr={tableData?.WidthArr}
            textStyle={{
              fontFamily: 'Lato-Bold',
              color: BLACK,
              textAlign: 'center',
              paddingHorizontal: 4,
              paddingVertical: 5,
            }}
            style={{backgroundColor: LIGHT_GREY}}
          />
          <Rows
            data={tableData?.DataTable}
            widthArr={tableData?.WidthArr}
            textStyle={{
              textAlign: 'center',
              fontFamily: 'Lato-Regular',
              color: GREY,
              padding: 4,
            }}
          />
        </Table>

        {/* Brief about each lab */}
        {/* Software Lab I and II */}
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 18,
          }}>
          Brief about each lab
        </Text>
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 8,
          }}>
          Software Lab I and II
        </Text>
        <ReusableComponent
          heading={'Objective'}
          text={
            'Building foundation for the future software experts is the objective of this lab. Hands on reinforcement concepts are coded / implemented via assignments of this lab, which are covered in the lectures. The lab has well-defined growth paths for students to build strong long-term practical knowledge related IT subjects. Another objective of the lab is to impart knowledge on graphics applications.'
          }
        />
        <ReusableComponent
          heading={'Need'}
          text={
            'Software lab is used for ALP (Assembly Language Programming), DSFL, SDL, IR , Internet Web Programming and also for Computer Graphics and OOPL applications.'
          }
        />
        <ReusableComponent
          heading={'Objective for programming lab'}
          text={
            'Programming lab is designed to help second year engineering students to discover advanced C programming skills through data structure including tree, stack, queue, linked-list, file structure concepts etc.'
          }
        />
        <ReusableComponent
          heading={'Need'}
          text={
            'The programming language laboratory focuses on data structure concepts using high level programming language such as C, C++, and Java. The laboratory designed to help the students to learn various innovative programming techniques, the "Design and Analysis of Algorithms" and "Object Orientated Concepts".'
          }
        />

        {/* Operating System Lab */}
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 18,
          }}>
          Operating System Lab
        </Text>
        <ReusableComponent
          heading={'Objective'}
          text={
            "The purpose of this lab is to give you a chance to examine and analyze the source code for a modern operating system. To perform practical's hands on reinforcement concepts this covered in the lectures."
          }
        />
        <ReusableComponent
          heading={'Need'}
          text={
            'This lab is used by staffs for conducting practical of the various subjects like OS, SDTL (TE IT), SA (BEIT), Internet of Things.'
          }
        />

        {/* Network lab */}
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 18,
          }}>
          Network lab
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Bold',
            color: GREY,
            fontSize: 15,
            marginTop: 10,
          }}>
          Objectives:
        </Text>
        {osl?.map(os => (
          <SingleList key={os} lab={os} />
        ))}
        <ReusableComponent
          heading={'Need'}
          text={
            'Network lab is required for study of the basic concepts of networking through design & implementation of small, medium, large networks. It includes study of network analyzers, network simulators & configuration of different servers.'
          }
        />

        {/* Hardware Lab */}
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 18,
          }}>
          Hardware Lab
        </Text>
        <ReusableComponent
          heading={'Objective'}
          text={`To import the skills and knowledge to students in studying the basic concepts of digital electronics, familiarity with available chips and motivate the students for the study and learn the theoretical and practical concepts of microprocessors like 8086, 80386 and comparison with Pentium processors, Microcontrollers, its applications and interfacing with peripheral devices. With the objective of "learn by doing", Digital lab is developed with the entire necessary infrastructure. Through these facilities, students will be familiarized with`}
        />
        {hwl?.map(hw => (
          <SingleList key={hw} lab={hw} />
        ))}
        <ReusableComponent
          heading={'Need'}
          text={
            'Necessity of Hardware lab is to study Digital Electronics Logic Design, different Microprocessors, its Architecture and interfacing with peripheral devices to be acquainted with "Hardware is Heart of Computer System".'
          }
        />

        {/* Computer Lab */}
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 18,
          }}>
          Computer Lab
        </Text>
        <ReusableComponent
          heading={'Objective for Computer lab'}
          text={`Computer lab is designed to help final year engineering students to learn advanced technology and final year projects.`}
        />
        <ReusableComponent
          heading={'Need'}
          text={
            'The computer laboratory used by final year students for project work, Information and cyber security, Machine learning, Business Analytics and Intelligence by use of latest programming and visualisation tools.'
          }
        />
      </View>
    </ScrollView>
  );
};

export default Labs;
