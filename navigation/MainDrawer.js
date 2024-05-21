import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ScreenComponents/HomeScreen';
import AboutScreen from './ScreenComponents/AboutScreen';
import SkillsScreen from './ScreenComponents/SkillScreen';
import EducationScreen from './ScreenComponents/EducationScreen';
import ContactScreen from './ScreenComponents/ContactScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          activeTintColor="black" // Active item color
        />
      </DrawerContentScrollView>
    );
  };
  
  const handleLogout = async () => {
    try {
      console.log(AsyncStorage.removeItem('token'));
      await AsyncStorage.removeItem('token');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      Alert.alert('Error', 'An error occurred while logging out');
      console.error(error);
    }
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'black', // Background color when item is focused
        drawerActiveTintColor: 'white', // Text color when item is focused
        drawerInactiveTintColor: 'black', // Text color when item is not focused
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Education" component={EducationScreen} />
      <Drawer.Screen name="Skills" component={SkillsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default MainDrawer;
