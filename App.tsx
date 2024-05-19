import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './src/presentation/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider settings={{icon: props => <Icon {...props} />}}>
        <BottomTabNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};
