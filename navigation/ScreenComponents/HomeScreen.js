import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-paper';
//import Social from './Social';

const image = { uri: 'https://i.pinimg.com/564x/21/88/31/2188313700383fbdef4f3aa9c88ef6ac.jpg' };


const HomeScreen = () => {
  
  const avatar1 = {uri: 'https://i.pinimg.com/736x/72/e5/30/72e53053691540023c22fd736992fd87.jpg'}

    return (
        <ImageBackground source={image} style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Ma. Ana De La Cruz</Text>
                        <Text style={styles.description}>
                        Programmer: A machine that turns coffee into code.”
                        </Text>
                    </View>
                    <View style={styles.avatarContainer}>
                        <Avatar.Image
                            source={avatar1} // Adjust the path as needed
                            size={250}
                            style={styles.avatar}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 16,
    },
    socialContainer: {
        flex: 1,
        marginBottom: 16,
    },
    contentContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textContainer: {
        maxWidth: '70%',
        marginLeft: 60,
    },
    title: {
        fontSize: 40 ,
        letterSpacing: 2,
        // fontFamily: 'Poppins-Bold', // Ensure this font is loaded
        fontWeight: '600',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12,
        color: 'gray',
        fontFamily: 'Poppins-Regular', // Ensure this font is loaded
    },
    description: {
        fontSize: 16,
        letterSpacing: 2,
        fontFamily: 'Poppins-Regular', // Ensure this font is loaded
        color: 'gray',
        marginTop: 10,
        
    },
    avatarContainer: {
        maxWidth: '30%',
        marginLeft: 50,
    },
    avatar: {
        width: 250,
        height: 250,
    },
});

export default HomeScreen;
