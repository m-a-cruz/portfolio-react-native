import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  Image,
  ImageBackground,
} from 'react-native';

const image = { uri: 'https://i.pinimg.com/564x/21/88/31/2188313700383fbdef4f3aa9c88ef6ac.jpg' };

const DATA = [
  {
    title: 'PYTHON',
    data: ['', '', ''],
    image: require('../../public/python-logo.png'),
  },
  {
    title: 'PHP',
    data: ['', '', ''],
    image: require('../../public/php-logo.png'),
  },
  {
    title: 'NODEJS',
    data: ['', '', ''],
    image: require('../../public/nodejs.png'),
  },
  {
    title: 'MYSQL',
    data: ['', ''],
    image: require('../../public/logo-mysql.png'),
  },
  {
    title: 'JAVASCRIPT',
    data: ['', ''],
    image: require('../../public/javascript.png'),
  },
];
const Skills = () => {
  
  return(
    <ImageBackground source={image} style={styles.container}>
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title,image}}) => (
        <View>
          <Text style={styles.header}>{title}</Text>
          <Image source={image} style={styles.image} />
        </View>
      )}
    />
  </SafeAreaView>
  </ImageBackground>
  );  
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'transparent',
    width: 400,
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
    alignSelf: 'center',
  },
});

export default Skills;
