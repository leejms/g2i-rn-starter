import React from 'react';
import { List } from 'react-native-elements';

export default props => {
  return <List {...props}>{props.children}</List>;
};
