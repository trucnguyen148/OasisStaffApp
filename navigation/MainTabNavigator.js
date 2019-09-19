import React from 'react';
import { Platform, StyleSheet, Text} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NewsScreen from '../screens/NewsScreen';
import BookingsScreen from '../screens/BookingsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import CollectionsScreen from '../screens/CollectionsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsCollection from '../screens/Collections/DetailsCollection';
import DetailsBooking from '../screens/Schedule/DetailsBooking';
import EditProfile from '../screens/Profile/EditProfile';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// News
const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={[styles.label, {color: tintColor}]}>
      News
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={Platform.OS === 'ios' ? 'ios-flame' : 'md-flame'}
      size={22}
      color={tintColor}
    />
  ),
};

NewsStack.path = '';

// Booking 
const BookingsStack = createStackNavigator(
  {
    Bookings: BookingsScreen,
    DetailsBooking: DetailsBooking
  },
  config
);

BookingsStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={[styles.label, {color: tintColor}]}>
      Bookings
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
      size={22}
      color={tintColor}
    />
  ),
};

BookingsStack.path = '';

// Schedule
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={[styles.label, {color: tintColor}]}>
      Schedule
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={Platform.OS === 'ios' ? 'ios-time' : 'md-time'}
      size={22}
      color={tintColor}
    />
  ),
};

ScheduleStack.path = '';

// Collections
const CollectionsStack = createStackNavigator(
  {
    Collections: CollectionsScreen,
    Details: DetailsCollection
  },
  config
);

CollectionsStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text  style={[styles.label, {color: tintColor}]}>
     Collections
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={Platform.OS === 'ios' ? 'ios-cube' : 'md-cube'}
      size={22}
      color={tintColor}
    />
  ),
};
CollectionsStack.path = '';

// Profile
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Edit: EditProfile,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={[styles.label, {color: tintColor}]}>
      Profile
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
      size={22}
      color={tintColor}
    />
  ),
};
ProfileStack.path = '';
const tabNavigator = createBottomTabNavigator({
  NewsStack,
  CollectionsStack,
  BookingsStack,
  ScheduleStack,
  ProfileStack,
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#c2185b',
    // activeBackgroundColor: '#000000',
    activeColor: '#c2185b',
    
    swipeEnabled: false,
    showLabel: true,
    showIcon: true,
    style: {
      backgroundColor: '#07040A',
      height: 50,
      // borderTopColor: 'red',
      // borderTopWidth: 2,
      
    },
    activeTabStyle: {
      backgroundColor: '#37b372',
      // borderColor: 'white',
      // borderTopColor: 'red',
      // borderTopWidth: 10,
      // overflow: 'visible'
    },
    indicatorStyle: {
      backgroundColor: 'white' 
    }
  },
}
);

tabNavigator.path = '';

export default tabNavigator;

const styles = StyleSheet.create({
  icon:{
    backgroundColor: '#fff',
    color: '#fff'
  },
  label:{
    fontSize: 10
  }
})