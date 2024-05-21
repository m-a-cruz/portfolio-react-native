import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

const image = { uri: 'https://i.pinimg.com/564x/21/88/31/2188313700383fbdef4f3aa9c88ef6ac.jpg' };
const AboutScreen = () => {
  
  const avatar1 = {uri: 'https://i.pinimg.com/736x/72/e5/30/72e53053691540023c22fd736992fd87.jpg'}

  return (
    <ImageBackground source={image} style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Me</Text>
        <Text style={styles.headerSubtitle}>My Introduction</Text>
      </View>
      <View style={styles.content}>
        <Image source={avatar1} style={styles.avatar} />
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph style={styles.paragraph}>
            I am a student from Naga College Foundation Inc. taking the course 
        Bachelor of Science in Computer Science. I am currently in my sophomore 
        year having basic knowledge with Python, C, C++, Larave, Postman,
        JavaScript, CSS, and HTML programming languages.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    textAlign: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    letterSpacing: 1,
    fontFamily: 'Poppins-Bold', // Use the loaded font
    fontWeight: '600',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Poppins-Regular', // Use the loaded font
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 125, // Rounded corners for the avatar
  },
  card: {
    maxWidth: 700,
    width: '90%',
    padding: 15,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'Poppins-Regular', // Use the loaded font
    color: 'white',
  },
});

export default AboutScreen;
