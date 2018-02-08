import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Avatar from '../../elements/Avatar';

const AvatarDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Avatar
          small
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.component}>
        <Avatar
          medium
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
          }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.component}>
        <Avatar
          large
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.component}>
        <Avatar
          xlarge
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      </View>
    </ScrollView>
  );
};

export default AvatarDetails;

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
