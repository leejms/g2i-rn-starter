import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";

import { Avatar, Card, Button, ListItem } from "../../elements";

const users = [
  {
    name: "mia zhang",
    avatar: "https://randomuser.me/api/portraits/women/76.jpg"
  },
  {
    name: "Ryan Hawkins",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    name: "Romain Hoogmoed",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg"
  }
];

export default (CardDetails = () => {
  return (
    <ScrollView>
      <Card title="CARD WITH DIVIDER">
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text style={styles.name}>{u.name}</Text>
            </View>
          );
        })}
      </Card>

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
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});
