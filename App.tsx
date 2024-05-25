import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens';

export const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider settings={{icon: props => <Icon {...props} />}}>
        <HomeScreen />
      </PaperProvider>
    </NavigationContainer>
  );
};
