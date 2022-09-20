import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PESHeader from '../components/PESHeader';

// Constants
import {BLACK, LIGHT_GREY, GREY, RED, WHITE} from '../constants/Colors';
import BackgroundImage from '../components/BackgroundImage';
import {ABOUT_BANNER} from '../constants/Images';

const About = ({navigation}) => {
  width = Dimensions.get('screen').width;

  const labs = [
    'Software Lab I',
    'Programming Lab I',
    'Operating System Lab',
    'Hardware Lab',
    'Software Lab II',
    'Programming Lab II',
    'Network Lab',
  ];

  const missions = [
    'To achieve academic excellence.',
    'To develop students for being competent in dynamic IT environment.',
    'To encourage research and innovation.',
    'To inculcate moral and professional ethics.',
  ];

  const peos = [
    `Demonstrate sustained learning by building the profound foundation of math's, science and engineering principles and make the students erudite self reliant and adaptable to diverse culture of multidisciplinary environment`,
    'Prepare graduate with strong knowledge and skills in the field of Information Technology to develop solutions of complex engineering problems.',
    'To bring leadership skill with teamwork in continuous learning environment to bear with professional challenges.',
    'To inculcate ethics towards issues of professional and social relevance.',
  ];

  const stgs = [
    'To enhance teaching learning process with effective utilization of e-resources.',
    'To organize national level conference / workshop.',
    'Focused Interaction with Alumni.',
  ];

  const ltgs = [
    'To Improve Industry Collaboration.',
    'Promote Faculty for Research.',
    'To Introduce Post Graduates Programme and Research Centre.',
    'To Enhance Infrastructure and lab development.',
  ];

  const programoutcomes = [
    {
      title: 'Engineering knowledge',
      text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems',
    },
    {
      title: 'Problem analysis',
      text: 'Identify, formulate, research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
    },
    {
      title: 'Design/development of solutions',
      text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.',
    },
    {
      title: 'Conduct investigations of complex problems',
      text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
    },
    {
      title: 'Modern tool usage',
      text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.',
    },
    {
      title: 'The engineer and society',
      text: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.',
    },
    {
      title: 'Environment and sustainability',
      text: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
    },
    {
      title: 'Ethics',
      text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
    },
    {
      title: 'Individual and team work',
      text: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
    },
    {
      title: 'Communication',
      text: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
    },
    {
      title: 'Project management and finance',
      text: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
    },
    {
      title: 'Life-long learning',
      text: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
    },
  ];

  const programspecificoutcomes = [
    'Graduate exhibits skills to analyze, design and develop software',
    'Graduate demonstrate technical competency and leadership qualities to work in multidisciplinary environment.',
  ];

  const SingleList = ({text}) => {
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
          key={text}
          style={{
            textAlign: 'left',
            fontFamily: 'Lato-Regular',
            color: GREY,
            fontSize: 15,
            marginTop: 8,
            width: width - 39,
          }}>
          {text}
        </Text>
      </View>
    );
  };

  const CustomListHeading = ({programoutcome}) => {
    return (
      // <Text
      //   style={{
      //     textAlign: 'left',
      //     fontFamily: 'Lato-Regular',
      //     color: GREY,
      //     fontSize: 15,
      //     marginTop: 10,
      //   }}
      //   key={programoutcome.title}>
      //   <Ionicons name="checkmark-circle-outline" size={15} color={RED} />{' '}
      //   <Text style={{fontFamily: 'Lato-Bold'}}>{programoutcome.title}: </Text>
      //   {programoutcome.text}
      // </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: 7,
        }}>
        <Ionicons
          name="checkmark-circle-outline"
          size={17}
          color={RED}
          style={{marginRight: 5}}
        />
        <View>
          <Text style={{fontFamily: 'Lato-Bold', color: GREY}}>
            {programoutcome.title}:{' '}
          </Text>
          <Text
            key={programoutcome.text}
            style={{
              textAlign: 'left',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              width: width - 50,
              marginTop: 5,
            }}>
            {programoutcome?.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{paddingBottom: 20, backgroundColor: WHITE}}>
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
                About
              </Text>
            </View>
          </View>
        }
      />

      <View style={{marginTop: 15, paddingHorizontal: 10}}>
        <View>
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              fontSize: 19,
              textAlign: 'left',
              marginTop: 8,
            }}>
            About Department
          </Text>

          <View
            style={{
              backgroundColor: RED,
              width: 50,
              height: 1,
              marginVertical: 10,
            }}></View>

          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
            }}>
            The Information Technology department of P.E.S's Modern College of
            Engineering, Pune started in 2006 with an intake capacity of 60
            students. This later increased to 120 from the year 2011-2012.
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              marginTop: 15,
            }}>
            The department of Information Technology at P.E.S's Modern College
            of Engineering is one of the few professionally runs premier
            Institutes working for the accomplishment of a mission to develop
            skilled IT professionals, by offering value-based quality education.
            The Department has made rapid strides as department of excellence
            for providing modern technical education intensive and meaningful
            teaching methods as well as regular inputs from practicing
            corporate. To built-up individual initiative, creativity, talent,
            leadership and the capability to adopt new Technology the Department
            encourage the student and staff member to participate and organized
            the on regular basis seminar, work-shop and many other short-term
            courses. Our endeavor is to inculcate a desire for continuous
            improvement, a sense of healthy competition and sensitivity towards
            ethical and moral values.
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              marginTop: 0,
            }}>
            The IT department is dedicated to uphold the following objectives:
            To develop conceptual and analytical skills in all functional areas
            of Information Technology, provide platform of high academic
            excellence to all students, encourage understanding of the strategic
            perceptions of the fast changing global scenario, develop the
            ability to understand and apply a multi-dimensional approach to
            achieve the overall mission of the organization and impart ethical
            and moral values for social well-being.
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              marginTop: 15,
            }}>
            During previous year, faculty members have presented and published
            papers at National and International Conferences and in journals.
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              marginTop: 15,
            }}>
            The department has seven fully equipped laboratories, with
            sufficient systems networked via professional servers like Windows
            2003 server, backup server, Linux Server and Oracle Server.
            Multi-lab, Internet facility and high-end multimedia workstations
            help the students to prepare their projects and presentations. The
            IT department offers high speed LAN connectivity and 24x7 power back
            up to ensure uninterrupted working. The student computer ratio of
            1:1 in the Institute ensures adequate practical training
            opportunities for all students.
          </Text>

          {/* Labs */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 20,
            }}>
            The department has following laboratories:
          </Text>
          {labs?.map(lab => (
            <SingleList text={lab} key={lab} />
          ))}

          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              marginTop: 15,
            }}>
            The department has come up with outstanding academic results. Our
            student has achieved top rank (2nd) in University and many have got
            percentiles above 95% in GATE exam. They have scored well in GRE,
            TOEFL and have taken admissions for post graduate courses in India
            and abroad.
          </Text>

          {/* Vision */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 5,
            }}>
            Vision
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: GREY,
              fontSize: 15,
              marginTop: 11,
            }}>
            To develop proficient IT engineers for the Industry and Society.
          </Text>

          {/* Mission */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 18,
            }}>
            Mission
          </Text>
          {missions?.map(mission => (
            <SingleList text={mission} key={mission} />
          ))}

          {/* PEO's */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 18,
            }}>
            PEO's
          </Text>
          {peos?.map(pes => (
            <SingleList text={pes} key={pes} />
          ))}

          {/* Goals */}
          {/* Short Term Goal */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 18,
            }}>
            Goals
          </Text>
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 8,
            }}>
            Short Term Goal
          </Text>
          {stgs?.map(stg => (
            <SingleList text={stg} key={stg} />
          ))}

          {/* Long Term Goal */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 18,
            }}>
            Long Term Goal
          </Text>
          {ltgs?.map(ltg => (
            <SingleList text={ltg} key={ltg} />
          ))}

          {/* Programme Outcomes */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 18,
            }}>
            Programme Outcomes
          </Text>
          {programoutcomes?.map(programoutcome => (
            <CustomListHeading
              programoutcome={programoutcome}
              key={programoutcome.title}
            />
          ))}

          {/* Programme Specific Outcomes */}
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              fontSize: 17,
              textAlign: 'left',
              marginTop: 18,
            }}>
            Programme Specific Outcomes
          </Text>
          {programspecificoutcomes?.map(programspecificoutcome => (
            <SingleList
              text={programspecificoutcome}
              key={programspecificoutcome}
            />
          ))}

          {/*  */}
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
