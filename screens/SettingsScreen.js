import React from 'react';
import { ScrollView, ImageBackground, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Paramètres',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/bgSettings.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
          <Text>Settings</Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
});
