import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { PricingCard } from '../../elements';

export default (PricingDetails = () => {
  return (
    <ScrollView>
      <PricingCard
        color="#4f9deb"
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  component: {}
});
