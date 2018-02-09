import React from 'react';
import { View, StyleSheet } from 'react-native';

import ButtonGroup from '../../elements/ButtonGroup';

export default class ButtonGroupDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Hello', 'World', 'Buttons'];
    const { selectedIndex } = this.state;

    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
