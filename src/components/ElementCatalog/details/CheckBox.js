import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CheckBox from "../../elements/CheckBox";

export default (CheckBoxDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <CheckBox title="Click Here" checked={this.state.checked} />
      </View>
      <View style={styles.component}>
        <CheckBox center title="Click Here" checked={this.state.checked} />{" "}
      </View>
      <View style={styles.component}>
        <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked}
        />
      </View>
      <View style={styles.component}>
        <CheckBox
          center
          title="Click Here to Remove This Item"
          iconRight
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          checked={this.state.checked}
        />
      </View>
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
