import React from "react";
import { Text, View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import { selectV2 } from '@storybook/addon-knobs';

import { Avatar } from "../../../src/components/elements";
import CenterView from "../CenterView";

const stories = storiesOf("Avatar", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>);
stories.add("base", () => {
  const label = 'Size';
  const options = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
  };
  const defaultValue = 'small';
  
  const size = selectV2(label, options, defaultValue)
  

  return (<Avatar
    size
    rounded
    source={{
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
    }}
    onPress={() => console.log("Works!")}
    activeOpacity={0.7}
  />)
});
