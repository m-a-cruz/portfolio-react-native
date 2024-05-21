import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = { uri: 'https://i.pinimg.com/564x/21/88/31/2188313700383fbdef4f3aa9c88ef6ac.jpg' };
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Basic input validation
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://10.0.2.2:3000/login', {
        username,
        password,
      });

      const token = response.data.token;

      await AsyncStorage.setItem('token', token);
      setIsLoading(false);
      navigation.navigate('MainDrawer');
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data) {
        Alert.alert('Error', error.response.data.message || 'Login failed');
        console.log(error.response.data);
      } else {
        Alert.alert('Error', 'An error occurred during login');
        console.log(error);
      }
    }
  };

  return (
    <ImageBackground source={image} style={styles.container}>
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" color={'grey'} onPress={handleLogin} disabled={isLoading} />
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
