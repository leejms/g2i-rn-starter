import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Slider } from "../../elements";

export default class PricingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, bigValue: 50 };
  }

  changed = value => {
    this.setState({ value: value });
  };

  bigChanged = value => {
    this.setState({ bigValue: value });
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "stretch",
            justifyContent: "center",
            margin: 20
          }}
        >
          <Slider value={this.state.value} onValueChange={this.changed} />
          <Text>Value: {this.state.value}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "stretch",
            justifyContent: "center",
            margin: 20
          }}
        >
          <Slider
            value={this.state.bigValue}
            onValueChange={this.bigChanged}
            minimumValue={0}
            maximumValue={100}
            step={1}
          />
          <Text>Value: {this.state.bigValue}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  component: {}
});
