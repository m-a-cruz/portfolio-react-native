import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import { Avatar } from 'react-native-paper';
//import Social from './Social';

const HomeScreen = () => {
    const [typingText, setTypingText] = useState('');
  const textToType = ['Web Developer', 'Software Developer'];
  const typingSpeed = 60; // Milliseconds per character
  const backDelay = 700; // Delay before starting to type the next text
  const backSpeed = 40; // Speed of deleting each character

  useEffect(() => {
    let currentIndex = 0;
    let currentTextIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting && currentTextIndex < textToType[currentIndex].length) {
        setTypingText(prev => prev + textToType[currentIndex].charAt(currentTextIndex));
        currentTextIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && currentTextIndex > 0) {
        setTypingText(prev => prev.slice(0, -1));
        currentTextIndex--;
        setTimeout(type, backSpeed);
      } else if (!isDeleting && currentTextIndex === textToType[currentIndex].length) {
        isDeleting = true;
        setTimeout(type, backDelay);
      } else if (isDeleting && currentTextIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textToType.length;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={styles.socialContainer}>
                <Social />
            </View> */}
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Jesreel A.</Text>
                        <Text style={styles.subtitle}>
                            ------------- <Text>{typingText}</Text>
                        </Text>
                        <Text style={styles.description}>
                            🚀 Aspiring Web /Software developer | Crafting digital magic with Mysql, React, Laravel, C/C++, C#, Java. Let's build the future together! ✨
                        </Text>
                    </View>
                    <View style={styles.avatarContainer}>
                        <Avatar.Image
                            source={require('../../assets/portfolio.jpg')} // Adjust the path as needed
                            size={250}
                            style={styles.avatar}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontSize: 28,
        letterSpacing: 2,
        fontFamily: 'Poppins-Bold', // Ensure this font is loaded
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
