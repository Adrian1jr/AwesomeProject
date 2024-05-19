import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {IonIcon} from '../components';

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <IonIcon name="construct-sharp" size={50} />
      <Text style={styles.text}>En construcción</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});
