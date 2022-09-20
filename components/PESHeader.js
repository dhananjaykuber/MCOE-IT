import React from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RED} from '../constants/Colors';

// Constants
import {DRAWER_LOGO} from '../constants/Images';

const PESHeader = ({navigation}) => {
  const HEIGHT = Dimensions.get('screen').height;
  const WIDTH = Dimensions.get('window').width;

  return (
    <View style={{paddingHorizontal: 5, paddingVertical: 8}}>
      <Image
        source={DRAWER_LOGO}
        style={{
          width: WIDTH - 10,
          height: 55,
          resizeMode: 'contain',
        }}
      />
      <TouchableOpacity
        style={{borderBottomWidth: 0.5, borderBottomColor: RED}}
        onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="reorder-three-outline"
          size={35}
          color={'#333'}
          style={{alignSelf: 'flex-end'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PESHeader;
