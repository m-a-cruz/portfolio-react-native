import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from react-native-vector-icons

const Social = () => {
  return (
    <View style={styles.container}>
      <Avatar.Icon
        size={30}
        icon={({ size, color }) => (
          <Icon name="github" size={size} color={color} />
        )}
        style={[styles.avatar, { backgroundColor: 'black' }]}
        onPress={() => Linking.openURL('https://github.com/IamRegexxt')}
      />
      
      <Avatar.Icon
        size={30}
        icon={({ size, color }) => (
          <Icon name="facebook" size={size} color={color} />
        )}
        style={[styles.avatar, { backgroundColor: '#1E88E5' }]}
        onPress={() => Linking.openURL('https://www.facebook.com/jesreel.amorganda.52')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: 16
  },
  avatar: {
    marginTop: 10,
  },
});

export default Social;
