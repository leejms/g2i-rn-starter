import React from "react";
import {
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import Header from "../../elements/Header";

export default (HeaderDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {
    margin: 0,
  }
});
