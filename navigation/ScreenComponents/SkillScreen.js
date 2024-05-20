import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton, Text, Provider as PaperProvider } from 'react-native-paper';

const SkillScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="React.js"
          subtitle="Frontend Framework"
          left={(props) => <Avatar.Icon {...props} icon="react" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content>
          <Text style={styles.skillText}>A JavaScript library for building user interfaces.</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title
          title="React Native"
          subtitle="Mobile Framework"
          left={(props) => <Avatar.Icon {...props} icon="cellphone" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content>
          <Text style={styles.skillText}>A framework for building native apps using React.</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title
          title="Node.js"
          subtitle="Backend Runtime"
          left={(props) => <Avatar.Icon {...props} icon="language-javascript" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content>
          <Text style={styles.skillText}>A JavaScript runtime built on Chrome's V8 JavaScript engine.</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title
          title="Java"
          subtitle="Programming Language"
          left={(props) => <Avatar.Icon {...props} icon="language-java" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content>
          <Text style={styles.skillText}>A high-level, class-based, object-oriented programming language.</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginVertical: 8,
  },
  skillText: {
    fontSize: 16,
    marginVertical: 4,
    fontFamily: 'Poppins-Regular', // Ensure this font is loaded
  },
});


export default SkillScreen;
