import {ImageBackground} from 'react-native';
import React from 'react';

const BackgroundImage = ({source, children}) => {
  return (
    <ImageBackground source={source} style={{width: '100%', height: 150}}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
