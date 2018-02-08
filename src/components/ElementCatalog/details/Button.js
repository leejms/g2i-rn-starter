import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import Button from "../../elements/Button";
import Icon from 'react-native-vector-icons/FontAwesome';

export default (ButtonDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Button text="BUTTON" />
      </View>
<View>
  <Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  text='BUTTON WITH ICON'
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
