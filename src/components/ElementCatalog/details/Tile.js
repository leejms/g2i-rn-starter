import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Tile } from '../../elements';

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
        <Tile
          imageSrc={{
            uri:
              'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg'
          }}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
        />
        <View style={{ height: 50 }} />
        <Tile
          imageSrc={{
            uri:
              'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
          }}
          title="Lorem ipsum dolor sit amet, consectetur"
          icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
          contentContainerStyle={{ height: 70 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>Caption</Text>
            <Text>Caption</Text>
          </View>
        </Tile>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  component: {}
});
