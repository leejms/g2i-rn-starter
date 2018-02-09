import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Badge from '../../elements/Badge';

export default (BadgeDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Badge value={3} textStyle={{ color: 'orange' }} />
      </View>
      <View style={styles.component}>
        <Badge containerStyle={{ backgroundColor: 'violet' }}>
          <Text>User 1</Text>
        </Badge>
      </View>
      <View style={styles.component}>
        <Badge
          onPress={() => {
            console.log('pressed');
          }}
          value="5"
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
