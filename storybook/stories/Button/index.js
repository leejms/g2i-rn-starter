import React from "react";
import { Text, View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import {Button} from "../../../src/components/elements";
import CenterView from "../CenterView";

const stories = storiesOf('Button', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
stories.add("with text", () => <Button title={text('Label', 'Hello Button')} />)
stories.add("large with right icon", () => (
    <View><Button large iconRight={{ name: "code" }} title="LARGE WITH RIGHT ICON" /></View>
  ));
