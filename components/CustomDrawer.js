import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// Constants
import {DRAWER_LOGO} from '../constants/Images';
import {WHITE, GREY, LIGHT_GREY} from '../constants/Colors';

const CustomDrawer = props => {
  return (
    <View
      style={{flex: 1, paddingVertical: 10, justifyContent: 'space-between'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: WHITE}}>
        <View style={{flex: 1, paddingHorizontal: 5}}>
          <Image
            source={DRAWER_LOGO}
            style={{
              flex: 1,
              width: '100%',
              height: 50,
              resizeMode: 'contain',
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: LIGHT_GREY,
            height: 0.5,
            marginTop: 10,
            flex: 1,
          }}></View>

        <View
          style={{
            flex: 1,
            backgroundColor: WHITE,
            paddingTop: 5,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          paddingHorizontal: 5,
          borderTopWidth: 0.5,
          borderColor: LIGHT_GREY,
        }}>
        <Text style={{color: GREY, fontFamily: 'Lato-Regular', marginTop: 10}}>
          Powered by{' '}
          <Text style={{fontFamily: 'Lato-Bold'}}>
            App Club Information Technology
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
