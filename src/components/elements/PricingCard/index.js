import React from 'react';
import { PricingCard } from 'react-native-elements';

export default props => {
  return <PricingCard {...props}>{props.children}</PricingCard>;
};
