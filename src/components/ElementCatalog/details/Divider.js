import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Divider } from '../../elements';

export default (DividerDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Divider />
      </View>
      <Divider />
      <View style={styles.component}>
        <Divider style={{ backgroundColor: 'blue' }} />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'white'
  }
});
