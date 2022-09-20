import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PESHeader from '../components/PESHeader';
import BackgroundImage from '../components/BackgroundImage';

// Constants
import {
  BLACK,
  GREY,
  LIGHT_GREY,
  LIGHT_RED,
  RED,
  WHITE,
} from '../constants/Colors';
import {
  HOD,
  HOME_ABOUT,
  HOME_BANNER,
  GALLERY_1,
  GALLERY_2,
  GALLERY_3,
} from '../constants/Images';

const Home = ({navigation}) => {
  const data = [
    {_id: 1, image: GALLERY_1},
    {_id: 2, image: GALLERY_2},
    {_id: 3, image: GALLERY_3},
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            width: 230,
            height: 140,
            margin: 10,
            borderRadius: 8,
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{paddingBottom: 20, backgroundColor: WHITE}}>
      <PESHeader navigation={navigation} />

      <BackgroundImage
        source={HOME_BANNER}
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
                  fontSize: 14,
                }}>
                WELCOME TO DEPARTMENT OF
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: WHITE,
                  fontFamily: 'Lato-Bold',
                  fontSize: 20,
                  marginTop: 6,
                }}>
                INFORMATION TECHNOLOGY
              </Text>
            </View>
          </View>
        }
      />

      <View style={{marginTop: 15}}>
        <View>
          <Image
            source={HOME_ABOUT}
            style={{
              width: 45,
              height: 45,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              fontSize: 19,
              textAlign: 'center',
              marginTop: 8,
              marginBottom: 13,
            }}>
            About Department
          </Text>
        </View>

        <View
          style={{
            backgroundColor: LIGHT_RED,
            padding: 10,
            margin: 10,
            borderRadius: 8,
            borderBottomWidth: 3,
            borderBottomColor: RED,
          }}>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: 'Lato-Regular',
              color: BLACK,
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
              color: BLACK,
              fontSize: 15,
              marginTop: 15,
            }}>
            The department of Information Technology at P.E.S's Modern College
            of Engineering is one of the few professionally runs premier
            Institutes working for the accomplishment of a mission to develop
            skilled IT professionals, by offering value-based quality education.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: WHITE,
              alignSelf: 'center',
              marginTop: 15,
              padding: 5,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('About')}>
            <Text style={{color: RED, fontFamily: 'Lato-Bold'}}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30}}>
          <Image
            source={HOD}
            style={{
              width: 90,
              height: 90,
              alignSelf: 'center',
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              color: RED,
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              fontSize: 18,
              marginTop: 10,
            }}>
            DR. MRS. S. D. DESHPANDE
          </Text>
          <Text
            style={{
              color: GREY,
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              fontSize: 14,
              marginTop: 5,
            }}>
            HEAD OF DEPARTMENT
          </Text>
          <View
            style={{
              backgroundColor: RED,
              width: 40,
              height: 1.5,
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 50,
            }}></View>
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              fontSize: 15,
              marginTop: 11,
            }}>
            UG INTAKE
          </Text>
          <Text
            style={{
              color: WHITE,
              fontFamily: 'Lato-Bold',
              backgroundColor: RED,
              alignSelf: 'center',
              paddingHorizontal: 8,
              paddingVertical: 3,
              borderRadius: 15,
              marginTop: 5,
              fontSize: 12,
            }}>
            120
          </Text>

          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              textAlign: 'center',
              marginTop: 10,
            }}>
            <Ionicons name="mail-open-outline" size={16} color={GREY} />
            {'  '}
            pesmcoe@moderncoe.edu.in
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              color: GREY,
              textAlign: 'center',
              marginTop: 4,
            }}>
            <Ionicons name="call-outline" size={16} color={GREY} /> {'  '}(020)
            25533638, 25533648.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: LIGHT_GREY,
            width: '100%',
            height: 0.5,
            marginTop: 30,
          }}></View>

        <View>
          <Text
            style={{
              color: BLACK,
              fontFamily: 'Lato-Bold',
              fontSize: 19,
              textAlign: 'center',
              marginTop: 18,
              marginBottom: 12,
            }}>
            Photos
          </Text>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
