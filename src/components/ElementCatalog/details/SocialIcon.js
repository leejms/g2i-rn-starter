import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SocialIcon } from '../../elements';

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
            alignItems: 'stretch',
            justifyContent: 'center',
            margin: 20
          }}
        >
          <SocialIcon type="twitter" />
          <SocialIcon raised={false} type="gitlab" />
          <SocialIcon light type="medium" />
          <SocialIcon light raised={false} type="medium" />
          <SocialIcon title="Sign In With Facebook" button type="facebook" />
          <SocialIcon title="Some Twitter Message" button type="twitter" />
          <SocialIcon button type="medium" />
          <SocialIcon button light type="instagram" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  component: {}
});
