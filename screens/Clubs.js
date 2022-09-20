import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PESHeader from '../components/PESHeader';
import BackgroundImage from '../components/BackgroundImage';
import {GALLERY_BANNER} from '../constants/Images';
import {WHITE} from '../constants/Colors';

const Clubs = ({navigation}) => {
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
                Clubs
              </Text>
            </View>
          </View>
        }
      />
    </ScrollView>
  );
};

export default Clubs;
