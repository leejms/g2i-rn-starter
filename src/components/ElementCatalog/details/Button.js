import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (ButtonDetails = () => {
  return (
    <ScrollView>
      <View style={styles.component}>
        <Button text="BUTTON" />
      </View>
      <View>
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          text="BUTTON WITH ICON"
        />
      </View>
      <View style={styles.component}>
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          iconRight
          text="BUTTON WITH RIGHT ICON"
        />
      </View>
      <View style={styles.component}>
        <Button
          text="LOADING BUTTON"
          loading
          loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
          textStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            width: 300,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
