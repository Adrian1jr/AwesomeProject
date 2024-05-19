import {BottomNavigation} from 'react-native-paper';
import {useState} from 'react';
import {HomeScreen, FavoritesScreen} from '../screens';

export const BottomTabNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', title: 'Inicio', focusedIcon: 'home'},
    {key: 'favorites', title: 'Favoritos', focusedIcon: 'heart-sharp'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    favorites: FavoritesScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: 'white',
        borderTopColor: 'black',
        borderTopWidth: 0.2,
        borderEndEndRadius: 1,
      }}
      activeIndicatorStyle={{backgroundColor: 'transparent'}}
      activeColor="blue"
    />
  );
};
