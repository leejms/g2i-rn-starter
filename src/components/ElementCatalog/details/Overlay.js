import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import { Overlay } from "../../elements";

export default (OverlayDetails = () => {
  return (
    <Overlay
      isVisible
      overlayBackgroundColor="white"
    >
      <Text>Hello from Overlay!</Text>
    </Overlay>
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
