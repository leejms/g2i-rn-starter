import React from 'react';
import { Overlay } from 'react-native-elements';

export default props => {
  return <Overlay {...props}>{props.children}</Overlay>;
};
