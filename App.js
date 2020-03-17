import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';

import Dashboard from './screens/dashboard';
import Report from './screens/report';

const TabScreen = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="view-dashboard" size={20} color="white" />)
      },
    },
    Report: {
      screen: Report,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Foundation name="results" size={25} color="white" />)
      },
    },
  
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#012851'
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 3,
      },
    },
  }
);


const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#012851',
      },
      headerTintColor: '#FFFFFF',
      title: 'Fexp',
    },
  },
});


export default createAppContainer(App);