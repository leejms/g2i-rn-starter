import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElementCatalog from './src/components/ElementCatalog';

export default class App extends React.Component {
  render() {
    return (
      <ElementCatalog/>
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
});
