import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Input } from '../../elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (InputDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Input placeholder="BASIC INPUT" />
      </View>
      <View style={styles.component}>
        <Input
          placeholder="INPUT WITH ICON"
          icon={<Icon name="user" size={24} color="black" />}
        />
      </View>
      <View style={styles.component}>
        <Input placeholder="INPUT WITH SHAKING EFFECT" shake={true} />
      </View>
      <View style={styles.component}>
        <Input
          placeholder="INPUT WITH ERROR MESSAGE"
          displayError={true}
          errorStyle={{ color: 'red' }}
          errorMessage="ENTER A VALID ERROR HERE"
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
