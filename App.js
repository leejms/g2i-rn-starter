import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StorybookUI from './storybook';

export default class App extends React.Component {
  render() {
    return (
      <StorybookUI/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})