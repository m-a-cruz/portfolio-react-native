import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ScreenComponents/HomeScreen';
import AboutScreen from './ScreenComponents/AboutScreen';
import SkillsScreen from './ScreenComponents/SkillScreen';
import EducationScreen from './ScreenComponents/EducationScreen';
import ContactScreen from './ScreenComponents/ContactScreen';
import LogoutButton from './ScreenComponents/Logout';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Main Drawer Navigator
const MainDrawer = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Education" component={EducationScreen} />
      <Drawer.Screen name="Skills" component={SkillsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen
        name="Logout"
        component={() => <LogoutButton navigation={navigation} />}
        options={{ drawerLabel: 'Logout' }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
