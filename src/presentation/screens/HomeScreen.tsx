import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import Sound from 'react-native-sound';

export const HomeScreen = () => {
  const soundFiles = [{name: 'Success', file: 'success.mp3'}];

  const playSound = (fileName: string) => {
    const sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
      if (error) return console.log('Failed:', error);

      sound.play(success => {
        if (!success) return console.log('Playback failed');
        sound.release();
      });
    });
  };

  return (
    <View style={styles.container}>
      {soundFiles.map((sound, index) => (
        <Button
          key={index}
          mode="contained"
          onPress={() => playSound(sound.file)}
          style={styles.button}>
          {sound.name}
        </Button>
      ))}
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

  button: {
    marginVertical: 10,
    borderRadius: 20,
  },
});
