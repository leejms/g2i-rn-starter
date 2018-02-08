import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StackNavigator } from "react-navigation";
import { List, ListItem, CheckBox } from "react-native-elements";

import AvatarDetails from "./details/Avatar";
import BadgeDetails from "./details/Badge";
import ButtonGroupDetails from "./details/ButtonGroup";
import ButtonDetails from "./details/Button";
import CardDetails from "./details/Card";
import CheckBoxDetails from './details/CheckBox';

const list = [
  { title: "Avatar", icon: "face" },
  { title: "Badge", icon: "looks-4" },
  { title: "ButtonGroup", icon: "view-column" },
  { title: "Button", icon: "view-compact" },
  { title: "Card", icon: "call-to-action" },
  { title: "CheckBox", icon: "check-box" },
  { title: "Divider", icon: "border-horizontal" },
  { title: "Forms", icon: "chrome-reader-mode" },
  { title: "Header", icon: "border-top" },
  { title: "Icons", icon: "filter-vintage" },
  { title: "Input", icon: "input" },
  { title: "Lists", icon: "view-list" },
  { title: "Overlay", icon: "settings-overscan" },
  { title: "Pricing", icon: "monetization-on" },
  { title: "Rating", icon: "star" },
  { title: "Searchbar", icon: "search" },
  { title: "Slider", icon: "linear-scale" },
  { title: "Social Icons", icon: "share" },
  { title: "Tile", icon: "crop-original" }
];

class ElementCatalog extends React.Component {
  static navigationOptions = {
    title: "G2i React Native Starter"
  };

  render() {
    return (
      <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={() => this.props.navigation.navigate(item.title)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: ElementCatalog
  },
  Avatar: {
    screen: AvatarDetails,
    navigationOptions: {
      title: "Avatar Samples"
    }
  },
  Badge: {
    screen: BadgeDetails,
    navigationOptions: {
      title: "Badge Samples"
    }
  },
  ButtonGroup: {
    screen: ButtonGroupDetails,
    navigationOptions: {
      title: "ButtonGroup Samples"
    }
  },
  Button: {
    screen: ButtonDetails,
    navigationOptions: {
      title: "Button Samples"
    }
  },
  Card: {
    screen: CardDetails,
    navigationOptions: {
      title: "Card Samples"
    }
  },
  CheckBox: {
    screen: CheckBoxDetails,
    navigationOptions:{
      title: 'CheckBox Samples'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
