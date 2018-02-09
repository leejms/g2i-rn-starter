import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Rating } from '../../elements';

export default class PricingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 1 };
  }

  ratingComplete = rating => {
    this.setState({ rating: rating });
  };

  render() {
    return (
      <ScrollView>
        <Rating
          showRating
          onFinishRating={this.ratingComplete}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={3.6}
          readonly
          imageSize={40}
          onFinishRating={this.ratingComplete}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          type="heart"
          ratingCount={4}
          fractions={2}
          startingValue={1.57}
          imageSize={40}
          onFinishRating={this.ratingComplete}
          showRating
          style={{ paddingVertical: 10 }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  component: {}
});
