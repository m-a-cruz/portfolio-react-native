import React from 'react';
import { ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { Card, Text, Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';

const image = { uri: 'https://i.pinimg.com/564x/21/88/31/2188313700383fbdef4f3aa9c88ef6ac.jpg' };

// Define each card as a separate component for better reusability
const MyComponent = ({ title, content, imageSource }) => (
  <Card style={styles.card}>
    <Card.Cover source={imageSource} />
    <Card.Content>
      <Text variant="titleLarge" style={styles.title}>{title}</Text>
      <Text variant="bodyMedium" style={styles.content}>{content}</Text>
    </Card.Content>
  </Card>
);

const EducationScreen = () => {
  return (
    <ImageBackground source={image} style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <MyComponent 
        title="Naga College Foundation Inc."
        content="Bachelor of Science in Computer Science 2022 - Present"
        imageSource={require('../../assets/college.jpg')} 
      />
      <MyComponent 
        title="Bicol College of Applied Science and Technology"
        content="Bachelor of Science in Architecture     2021 - 2022"
        imageSource={require('../../public/biscast.png')} 
      />
      <MyComponent 
        title="Naga City Science High School"
        content="Science, Technology, Engineering, Mathematics                                                    2019 - 2021"
        imageSource={require('../../public/ncshs.png')} 
      />
      <MyComponent 
        title="Cararayan National High School"
        content="Special Science Class                            2015 - 2019"
        imageSource={require('../../public/cnhs.png')} 
      />
      <MyComponent 
        title="Don Manuel I. Abella Central School"
        content="Elementary School                                    2008 - 2015"
        imageSource={require('../../public/cnhs.png')} 
      />
      
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  card: {
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold', // Ensure this font is loaded
  },
  content: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular', // Ensure this font is loaded
  },
});


export default EducationScreen;
