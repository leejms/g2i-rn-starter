import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from '../../elements';

export default class PricingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 1 };
  }

  someMethod = text => {
    console.log('SearchBar:', text);
  };

  render() {
    return (
      <ScrollView>
        <SearchBar
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          noIcon
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          round
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          lightTheme
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          lightTheme
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Type Here..."
        />

        <SearchBar
          showLoading
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
        />

        <SearchBar showLoading platform="android" placeholder="Search" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  component: {}
});
