import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import PESHeader from '../components/PESHeader';
import BackgroundImage from '../components/BackgroundImage';
import {
  FACULTY_1,
  FACULTY_2,
  FACULTY_3,
  FACULTY_4,
  FACULTY_5,
  FACULTY_6,
  FACULTY_7,
  FACULTY_8,
  FACULTY_9,
  FACULTY_10,
  FACULTY_11,
  FACULTY_12,
  FACULTY_13,
  FACULTY_14,
  GALLERY_BANNER,
} from '../constants/Images';
import {BLACK, RED, WHITE, GREY, LIGHT_RED} from '../constants/Colors';

const FacultyInformation = ({navigation}) => {
  const width = Dimensions.get('window').width;

  const data = [
    {
      _id: 1,
      image: FACULTY_1,
      name: 'DR.MRS.S.D.DESHPANDE',
      position: 'Associate Professor & Head of the department',
      qualification: 'Ph.D',
      experience: '25+ Years',
      email: 'hodit@moderncoe.edu.in',
    },
    {
      _id: 2,
      image: FACULTY_2,
      name: 'PROF. CHANDRASHEKAR A. GHUGE',
      position: 'Associate Professor',
      qualification: 'ME(Computer) PhD(pursuing)',
      experience: '19+ Years',
      email: 'chandrashekar.ghuge@moderncoe.edu.in',
    },
    {
      _id: 3,
      image: FACULTY_3,
      name: 'MRS.V.G.DIXIT',
      position: 'Assistant Professor',
      qualification: 'M.Tech(CSE)',
      experience: '22+ Years',
      email: 'vandana.dixit@moderncoe.edu.in',
    },
    {
      _id: 4,
      image: FACULTY_4,
      name: 'MRS. SWAPNA SAMEER BHAVSAR',
      position: 'Assistant Professor',
      qualification: 'ME(Computer Networks) PhD Pursuing',
      experience: '16.6+ Years',
      email: 'swapna.bhavsar@moderncoe.edu.in',
    },
    {
      _id: 5,
      image: FACULTY_5,
      name: 'MRS.S.A.KULKARNI',
      position: 'Assistant Professor',
      qualification: 'BE(IT) ME Pursuing',
      experience: '12.11+ Years',
      email: 'sampada.kulkarni@moderncoe.edu.in',
    },
    {
      _id: 6,
      image: FACULTY_6,
      name: 'MS.Y.D.FATANGARE',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '12.5+ Years',
      email: 'yogita.fatangare@moderncoe.edu.in',
    },
    {
      _id: 7,
      image: FACULTY_7,
      name: 'MRS. ASHWINI AMIT BHAMRE',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '10+ Years',
      email: 'ashwinibhamre3@gmail.com',
    },
    {
      _id: 8,
      image: FACULTY_8,
      name: 'MS.POONAM L.RAKIBE',
      position: 'Assistant Professor',
      qualification: 'M.E. Computer',
      experience: '9.5+ Years',
      email: 'poonamrakibe1506@gmail.com',
    },
    {
      _id: 9,
      image: FACULTY_9,
      name: 'MR. DIGVIJAY A. PATIL',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '7.1+ Years',
      email: 'digvijay.patil@moderncoe.edu.in',
    },
    {
      _id: 10,
      image: FACULTY_10,
      name: 'MR. SHANTANU S. PAWAR',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '6+ Years',
      email: 'shantanupawar09@gmail.com',
    },
    {
      _id: 11,
      image: FACULTY_11,
      name: 'MRS.TANMAYEE NIKHIL KUTE',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '8.5+ Years',
      email: 'tanmayee.kute@moderncoe.edu.in',
    },
    {
      _id: 12,
      image: FACULTY_12,
      name: 'MS. S.S. MITKARI',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '10+ Years',
      email: 'mitkarishoma@gmail.com',
    },
    {
      _id: 13,
      image: FACULTY_14,
      name: 'MS. S.M. JAGTAP',
      position: 'Assistant Professor',
      qualification: 'M.E. Comp',
      experience: '4.11+ Years',
      email: 'supriya.jagtap@moderncoe.edu.in',
    },
    {
      _id: 14,
      image: FACULTY_13,
      name: 'MRS.MUKTA MALLIKARJUN JAMAGE',
      position: 'Assistant Professor',
      qualification: 'M.E. CSI',
      experience: '6+ Years',
      email: 'mukta.jamage@moderncoe.edu.in',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: width - 26,
          marginHorizontal: 5,
          marginVertical: 10,
          backgroundColor: LIGHT_RED,
          borderRadius: 5,
          paddingVertical: 18,
          paddingHorizontal: 5,
          borderBottomColor: RED,
          borderBottomWidth: 2,
        }}
        key={item._id}>
        <Image
          source={item?.image}
          style={{
            width: 80,
            height: 80,
            alignSelf: 'center',
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            color: RED,
            fontFamily: 'Lato-Bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10,
          }}>
          {item?.name}
        </Text>
        <Text
          style={{
            color: GREY,
            fontFamily: 'Lato-Bold',
            textAlign: 'center',
            fontSize: 14,
            marginTop: 5,
          }}>
          {item?.position}
        </Text>

        <View
          style={{
            width: 30,
            backgroundColor: RED,
            height: 2,
            marginTop: 12,
            alignSelf: 'center',
            borderRadius: 50,
          }}></View>

        <View
          style={{
            backgroundColor: '#f4f4f4',
            paddingVertical: 15,
            marginTop: 14,
            marginHorizontal: 10,
            borderRadius: 8,
          }}>
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              fontSize: 13,
            }}>
            QUALIFICATION
          </Text>
          <Text
            style={{
              color: GREY,
              fontFamily: 'Lato-Regular',
              textAlign: 'center',
              fontSize: 13,
              marginTop: 5,
            }}>
            {item?.qualification}
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: LIGHT_RED,
              height: 2,
              marginVertical: 3,
              marginTop: 8,
            }}></View>
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              fontSize: 13,
              marginTop: 6,
            }}>
            EXPERIENCE
          </Text>
          <Text
            style={{
              color: GREY,
              fontFamily: 'Lato-Regular',
              textAlign: 'center',
              fontSize: 13,
              marginTop: 5,
            }}>
            {item?.experience}
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: LIGHT_RED,
              height: 2,
              marginVertical: 3,
              marginTop: 10,
            }}></View>
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              fontSize: 13,
              marginTop: 6,
            }}>
            EMAIL ID
          </Text>
          <Text
            style={{
              color: GREY,
              fontFamily: 'Lato-Regular',
              textAlign: 'center',
              fontSize: 13,
              marginTop: 5,
            }}>
            {item?.email}
          </Text>
        </View>
      </View>
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
                Faculty Information
              </Text>
            </View>
          </View>
        }
      />
      <View
        style={{
          paddingHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </ScrollView>
  );
};

export default FacultyInformation;
