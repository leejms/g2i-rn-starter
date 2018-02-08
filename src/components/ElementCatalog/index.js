import React from 'react';
import{Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

// detail screens
import AvatarImpl from './Avatar';

class ElementCatalogHome extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Avatar"
          onPress={() => this.props.navigation.navigate('Avatar')}
        />
        </View>
      );
    }
  }
  
  export default StackNavigator({
    Home: {
      screen: ElementCatalogHome,
    },
    Avatar:{
        screen: AvatarImpl
    },
    {
        initialRouteName: 'Home',
      }
  });