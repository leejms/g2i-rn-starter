import React from 'react';
import { ListItem } from 'react-native-elements';

export default props => {
  return <ListItem {...props}>{props.children}</ListItem>;
};
