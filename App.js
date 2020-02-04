/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
const store = configureStore();
import Offeractions from './src/actions/Offeractions'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import OfferComponent from './src/components/OfferComponent';
// import OfferComponent from './src/components/OfferComponent';






export default class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
 
  render() {
    return (
      <Provider store={store}>
         <Offeractions />
      </Provider>
     
    )


  }
}


