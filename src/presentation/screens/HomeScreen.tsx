import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import Sound from 'react-native-sound';
import {SoundButton} from '../components/shared/SoundButton';
import {Text} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const soundFiles = [
    {name: 'Success', file: 'success.mp3'},
    {name: 'Sonic Coin', file: 'soniccoin.mp3'},
    {name: 'Success', file: 'success.mp3'},
    {name: 'Sonic Coin', file: 'soniccoin.mp3'},
    {name: 'Success', file: 'success.mp3'},
    {name: 'Sonic Coin', file: 'soniccoin.mp3'},
    {name: 'Success', file: 'success.mp3'},
    {name: 'Sonic Coin', file: 'soniccoin.mp3'},
  ];

  const playSound = (fileName: string) => {
    const sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
      if (error) return console.log('Failed:', error);

      sound.play(success => {
        if (!success) return console.log('Playback failed');
        sound.release();
      });
    });
  };

  const renderSoundButton = ({item}: {item: {name: string; file: string}}) => (
    <SoundButton name={item.name} onPress={() => playSound(item.file)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a CoolSonic</Text>
      <FlatList
        data={soundFiles}
        renderItem={renderSoundButton}
        keyExtractor={(item, index) => index.toString()}
        numColumns={screenWidth >= 768 ? 4 : 5}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
});
