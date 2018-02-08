import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

import Card from '../../elements/Card';
import Avatar from '../../elements/Avatar';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
];

export default CardDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Card title='CARD WITH DIVIDER'>
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode='cover'
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
      </View>
      <View style={styles.component}>
        <Card containerStyle={{ padding: 0 }}>
          {users.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                avatar={{ uri: u.avatar }}
              />
            );
          })}
        </Card>
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
        <Card title='HELLO WORLD' image={require('../../../images/pic2.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor='#03A9F4'
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title='VIEW NOW'
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
