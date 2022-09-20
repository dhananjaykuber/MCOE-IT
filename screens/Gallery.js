import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import PESHeader from '../components/PESHeader';

// Constants
import {
  GALLERY_1,
  GALLERY_2,
  GALLERY_3,
  GALLERY_4,
  GALLERY_5,
  GALLERY_6,
  GALLERY_7,
  GALLERY_8,
  GALLERY_BANNER,
} from '../constants/Images';
import {WHITE} from '../constants/Colors';

const Gallery = ({navigation}) => {
  const width = Dimensions.get('screen').width;

  const data = [
    {_id: 1, image: GALLERY_1},
    {_id: 2, image: GALLERY_2},
    {_id: 3, image: GALLERY_3},
    {_id: 4, image: GALLERY_4},
    {_id: 5, image: GALLERY_5},
    {_id: 6, image: GALLERY_6},
    {_id: 7, image: GALLERY_7},
    {_id: 8, image: GALLERY_8},
  ];

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
                Gallery
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
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 20,
        }}>
        {data.map(item => (
          <Image
            source={item.image}
            style={{
              height: width / 3 - 20,
              width: width / 2 - 20,
              margin: 5,
              borderRadius: 8,
            }}
            key={item._id}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Gallery;
