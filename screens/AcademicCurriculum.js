import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import PESHeader from '../components/PESHeader';
import BackgroundImage from '../components/BackgroundImage';
import {GALLERY_BANNER} from '../constants/Images';
import {BLACK, GREY, LIGHT_GREY, RED, WHITE} from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AcademicCurriculum = ({navigation}) => {
  const firstyearsem1 = [
    'Engineering Mathematics I',
    'Engineering Physics/ Engineering Chemistry',
    'Systems in Mechanical Engineering',
    'Basic Electrical Engineering/ Basic Electronics Engineering',
    'Programming and Problem Solving/ Engineering Mechanics',
    'Workshop',
    'Audit Course 1',
  ];

  const firstyearsem2 = [
    'Engineering Mathematics-II',
    'Engineering Physics/ Engineering Chemistry',
    'Basic Electrical Engineering/ Basic Electronics Engineering',
    'Programming and Problem Solving/ Engineering Mechanics',
    'Engineering Graphics',
    'Project Based Learning',
    'Audit Course 2',
  ];

  secondyearsem1 = [
    'Discrete Mathematics',
    'Logic Design and Computer Organization',
    'Data Structures and Algorithms',
    'Object Oriented Programming',
    'Basics of Computer Network',
    'Logic Design Computer Organization Lab',
    'Data Structures and Algorithms Lab',
    'Object Oriented Programming Lab',
    'Soft Skill Lab',
    'Mandatory Audit Course 3s',
  ];

  secondyearsem2 = [
    'Engineering Mathematics- III',
    'Processor Architecture',
    'Database Management System',
    'Computer GraphicsThird',
    'Software Engineering',
    'Programming Skill Development Lab',
    'Database-Management System Lab',
    'Computer Graphics Lab',
    'Project Based Learning',
    'Mandatory Audit Course 4',
  ];

  thirdyearsem1 = [
    'Theory of Computation',
    'Operating Systems',
    'Machine Learning',
    'Human Computer Interaction',
    'Elective-I',
    'Operating Systems Lab',
    'Human Computer Interaction- Lab',
    'Laboratory Practice-I',
    'Seminar',
    'Audit Course 5',
  ];

  thirdyearsem2 = [
    'Computer Networks & Security',
    'Data Science and Big Data Analytics',
    'Web Application Development',
    'Elective-II',
    'Internship',
    'Computer Networks & Security-Lab',
    'DS & BDA-Lab',
    'Laboratory Practice-II',
    'Audit Course 6',
  ];

  finalyearsem1 = [
    'Information and Storage Retrieval',
    'Software Project Management',
    'Deep Learning',
    'Elective III',
    'Elective IV',
    'Lab Practice III',
    'Lab Practice IV',
    'Project Stage-I',
    'Audit Course7',
  ];

  finalyearsem2 = [
    'Distributed Systems',
    'Elective V',
    'Elective VI',
    'Startup and Entrepreneurship',
    'Lab Practice V',
    'Lab Practice VI',
    'Project Stage II',
    'Audit Course 8',
  ];

  const SingleList = ({year}) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Ionicons
          name="caret-forward-circle-outline"
          size={17}
          color={BLACK}
          style={{marginTop: 7, marginRight: 5}}
        />
        <Text
          key={year}
          style={{
            textAlign: 'left',
            fontFamily: 'Lato-Regular',
            color: GREY,
            fontSize: 15,
            marginTop: 8,
          }}>
          {year}
        </Text>
      </View>
    );
  };

  const Download = ({year}) => {
    return (
      <TouchableOpacity style={{marginTop: 10}}>
        <Text style={{color: RED, fontFamily: 'Lato-Bold'}}>
          <Ionicons
            name="cloud-download-outline"
            size={15}
            color={RED}
            style={{marginRight: 10}}
          />
          {'   '}
          Download Detailed Syllabus Of {year}
        </Text>
      </TouchableOpacity>
    );
  };

  const HorizontalLine = () => {
    return (
      <View
        style={{
          backgroundColor: LIGHT_GREY,
          width: '100%',
          height: 1,
          marginTop: 20,
        }}></View>
    );
  };

  return (
    <ScrollView>
      <PESHeader navigation={navigation} />

      <BackgroundImage
        source={GALLERY_BANNER}
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
                Academic Curriculum
              </Text>
            </View>
          </View>
        }
      />

      <View style={{paddingHorizontal: 10}}>
        {/* FE */}
        <View>
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 20,
              marginBottom: 8,
            }}>
            First Year (FE)
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
            }}>
            Semister - I Subjects
          </Text>
          <View>
            {firstyearsem1?.map(fe => (
              <SingleList year={fe} key={fe} />
            ))}
          </View>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
              marginTop: 12,
            }}>
            Semister - II Subjects
          </Text>
          <View>
            {firstyearsem2?.map(fe => (
              <SingleList year={fe} key={fe} />
            ))}
          </View>
          <Download year={'FE'} />
        </View>

        <HorizontalLine />

        {/* SE */}
        <View>
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 20,
              marginBottom: 8,
            }}>
            Second Year (SE)
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
            }}>
            Semister - I Subjects
          </Text>
          <View>
            {secondyearsem1?.map(se => (
              <SingleList year={se} key={se} />
            ))}
          </View>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
              marginTop: 12,
            }}>
            Semister - II Subjects
          </Text>
          <View>
            {secondyearsem2?.map(se => (
              <SingleList year={se} key={se} />
            ))}
          </View>
          <Download year={'SE'} />
        </View>

        <HorizontalLine />

        {/* TE */}
        <View>
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 20,
              marginBottom: 8,
            }}>
            Third Year (TE)
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
            }}>
            Semister - I Subjects
          </Text>
          <View>
            {thirdyearsem1?.map(te => (
              <SingleList year={te} key={te} />
            ))}
          </View>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
              marginTop: 12,
            }}>
            Semister - II Subjects
          </Text>
          <View>
            {thirdyearsem2?.map(te => (
              <SingleList year={te} key={te} />
            ))}
          </View>
          <Download year={'TE'} />
        </View>

        <HorizontalLine />

        {/* BE */}
        <View>
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 20,
              marginBottom: 8,
            }}>
            Final Year (BE)
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
            }}>
            Semister - I Subjects
          </Text>
          <View>
            {finalyearsem1?.map(be => (
              <SingleList year={be} key={be} />
            ))}
          </View>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              fontSize: 16,
              marginBottom: 3,
              marginTop: 12,
            }}>
            Semister - II Subjects
          </Text>
          <View>
            {finalyearsem2?.map(be => (
              <SingleList year={be} key={be} />
            ))}
          </View>
          <Download year={'BE'} />
        </View>

        <View style={{marginBottom: 15}}></View>

        {/*  */}
      </View>
    </ScrollView>
  );
};

export default AcademicCurriculum;
