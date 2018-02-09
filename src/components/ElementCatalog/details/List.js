import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from '../../elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];
const list2 = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
];

export default (BadgeDetails = () => {
  return (
    <ScrollView>
      <List containerStyle={{ marginBottom: 20 }}>
        {list.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{ uri: l.avatar_url }}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))}
      </List>
      <List>
        {list2.map((item, i) => (
          <ListItem key={i} title={item.title} leftIcon={{ name: item.icon }} />
        ))}
      </List>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {}
});
