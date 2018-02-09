import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Icon } from '../../elements';

export default (IconDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Icon name="rowing" />
      </View>
      <View style={styles.component}>
        <Icon name="g-translate" color="#00aced" />
      </View>
      <View style={styles.component}>
        <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
      </View>
      <View style={styles.component}>
        <Icon
          reverse
          name="ios-american-football"
          type="ionicon"
          color="#517fa4"
        />
      </View>
      <View style={styles.component}>
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log('hello')}
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
