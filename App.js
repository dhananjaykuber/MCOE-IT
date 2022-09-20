import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import {
  Home,
  About,
  Gallery,
  Clubs,
  FacultyInformation,
  AcademicCurriculum,
  Labs,
} from './screens';
import CustomDrawer from './components/CustomDrawer';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Constants
import {GREY, LIGHT_RED, RED, WHITE} from './constants/Colors';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="FacultyInformation"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: LIGHT_RED,
          drawerActiveTintColor: RED,
          drawerInactiveTintColor: GREY,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            fontFamily: 'Lato-Bold',
            fontWeight: '500',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="people-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Labs"
          component={Labs}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="tv-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Gallery"
          component={Gallery}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="images-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Clubs"
          component={Clubs}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="rocket-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Faculty Information"
          component={FacultyInformation}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="ribbon-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Academic Curriculum"
          component={AcademicCurriculum}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="newspaper-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
