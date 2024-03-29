import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem, CheckBox } from 'react-native-elements';

import AvatarDetails from './details/Avatar';
import BadgeDetails from './details/Badge';
import ButtonGroupDetails from './details/ButtonGroup';
import ButtonDetails from './details/Button';
import CardDetails from './details/Card';
import CheckBoxDetails from './details/CheckBox';
import DividerDetails from './details/Divider';
import HeaderDetails from './details/Header';
import IconDetails from './details/Icon';
import InputDetails from './details/Input';
import ListDetails from './details/List';
import OverlayDetails from './details/Overlay';
import PricingDetails from './details/PricingCard';
import RatingDetails from './details/Rating';
import SearchBarDetails from './details/SearchBar';
import SliderDetails from './details/Slider';
import SocialDetails from './details/SocialIcon';
import TileDetails from './details/Tile';
import { SocialIcon } from '../elements/index';

const list = [
  { title: 'Avatar', icon: 'face' },
  { title: 'Badge', icon: 'looks-4' },
  { title: 'ButtonGroup', icon: 'view-column' },
  { title: 'Button', icon: 'view-compact' },
  { title: 'Card', icon: 'call-to-action' },
  { title: 'CheckBox', icon: 'check-box' },
  { title: 'Divider', icon: 'border-horizontal' },
  { title: 'Header', icon: 'border-top' },
  { title: 'Icon', icon: 'filter-vintage' },
  { title: 'Input', icon: 'input' },
  { title: 'List', icon: 'view-list' },
  { title: 'Overlay', icon: 'settings-overscan' },
  { title: 'PricingCard', icon: 'monetization-on' },
  { title: 'Rating', icon: 'star' },
  { title: 'SearchBar', icon: 'search' },
  { title: 'Slider', icon: 'linear-scale' },
  { title: 'SocialIcon', icon: 'share' },
  { title: 'Tile', icon: 'crop-original' }
];

class ElementCatalog extends React.Component {
  static navigationOptions = {
    title: 'G2i React Native Starter'
  };

  render() {
    return (
      <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={() => this.props.navigation.navigate(item.title)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: ElementCatalog
  },
  Avatar: {
    screen: AvatarDetails,
    navigationOptions: {
      title: 'Avatar Samples'
    }
  },
  Badge: {
    screen: BadgeDetails,
    navigationOptions: {
      title: 'Badge Samples'
    }
  },
  ButtonGroup: {
    screen: ButtonGroupDetails,
    navigationOptions: {
      title: 'ButtonGroup Samples'
    }
  },
  Button: {
    screen: ButtonDetails,
    navigationOptions: {
      title: 'Button Samples'
    }
  },
  Card: {
    screen: CardDetails,
    navigationOptions: {
      title: 'Card Samples'
    }
  },
  CheckBox: {
    screen: CheckBoxDetails,
    navigationOptions: {
      title: 'CheckBox Samples'
    }
  },
  Divider: {
    screen: DividerDetails,
    navigationOptions: {
      title: 'Divider Samples'
    }
  },
  Header: {
    screen: HeaderDetails,
    navigationOptions: {
      title: 'Header Samples'
    }
  },
  Icon: {
    screen: IconDetails,
    navigationOptions: {
      title: 'Icon Samples'
    }
  },
  Input: {
    screen: InputDetails,
    navigationOptions: {
      title: 'Input Samples'
    }
  },
  List: {
    screen: ListDetails,
    navigationOptions: {
      title: 'List Samples'
    }
  },
  Overlay: {
    screen: OverlayDetails,
    navigationOptions: {
      title: 'Overlay Samples'
    }
  },
  PricingCard: {
    screen: PricingDetails,
    navigationOptions: {
      title: 'Pricing Samples'
    }
  },
  Rating: {
    screen: RatingDetails,
    navigationOptions: {
      title: 'Rating Samples'
    }
  },
  SearchBar: {
    screen: SearchBarDetails,
    navigationOptions: {
      title: 'SearchBar Samples'
    }
  },
  Slider: {
    screen: SliderDetails,
    navigationOptions: {
      title: 'Slider Samples'
    }
  },
  SocialIcon: {
    screen: SocialDetails,
    navigationOptions: {
      title: 'SocialIcon Samples'
    }
  },
  Tile: {
    screen: TileDetails,
    navigationOptions: {
      title: 'Tile Samples'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
