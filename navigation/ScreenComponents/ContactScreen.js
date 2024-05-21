import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const image = { uri: 'https://i.pinimg.com/564x/21/88/31/2188313700383fbdef4f3aa9c88ef6ac.jpg' };

const ContactScreen = () => {
  return (
    <ImageBackground source={image} style={styles.container}>
    <View style={styles.container1}>
      <Text style={styles.header}>
        Contact me!
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Project"
            multiline
            numberOfLines={4}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Send me"
              onPress={() => {}}
              color="gray"
            />
          </View>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Bold', // Ensure this font is loaded
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    fontFamily: 'Poppins-Regular', // Ensure this font is loaded
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // For Android to align text at the top
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
});

export default ContactScreen;
