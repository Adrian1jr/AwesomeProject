import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Sound from 'react-native-sound';
import {SoundButton} from '../components/index';
import {Text} from 'react-native-paper';

export const HomeScreen = () => {
  const [currentSound, setCurrentSound] = useState<Sound | null>(null);

  const soundFiles = [
    {name: 'Ak 47', file: 'akfortyseven.mp3'},
    {name: 'Bell', file: 'bell.mp3'},
    {name: `Can't touch`, file: 'cantouchthis.mp3'},
    {name: 'Cartoon Bite', file: 'cartoonbite.mp3'},
    {name: 'Cartoon Boing', file: 'cartoonboing.mp3'},
    {name: 'Cartoon Poke', file: 'cartoonpoke.mp3'},
    {name: 'Cartoon Splat', file: 'cartoonsplat.mp3'},
    {name: 'Desert Eagle', file: 'deserteagle.wav'},
    {name: 'Enemy Spoted', file: 'enemyspoted.mp3'},
    {name: 'Hey Bro', file: 'heybrocuphead.wav'},
    {name: 'Knockout', file: 'knockoutcuphead.wav'},
    {name: 'Mario Coin', file: 'mariocoin.wav'},
    {name: 'Start Race', file: 'mariokartstartrace.mp3'},
    {name: 'Level Up', file: 'mariolevelup.mp3'},
    {name: 'Mario Up One', file: 'marioupone.mp3'},
    {name: 'Sonic Coin', file: 'soniccoin.mp3'},
    {name: 'Success', file: 'success.mp3'},
    {name: 'Taco Bell', file: 'tacobell.mp3'},
    {name: 'Windows Error', file: 'windowserror.mp3'},
    {name: 'Windows XP', file: 'windowsxpshutdown.mp3'},
  ];

  const playSound = (fileName: string) => {
    if (currentSound) {
      currentSound.stop(() => {
        currentSound.release();
        setCurrentSound(null);
        startNewSound(fileName);
      });
    } else {
      startNewSound(fileName);
    }
  };

  const startNewSound = (fileName: string) => {
    const sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed:', error);
        return;
      }

      sound.play(success => {
        if (!success) {
          console.log('Playback failed');
        }
        sound.release();
        setCurrentSound(null);
      });

      setCurrentSound(sound);
    });
  };

  useEffect(() => {
    return () => {
      if (currentSound) {
        currentSound.release();
      }
    };
  }, [currentSound]);

  return (
    <>
      <Text className="m-8 text-4xl font-bold text-center">Sound Buttons</Text>
      <ScrollView>
        <View className="flex flex-row flex-wrap justify-center">
          {soundFiles.map((item, index) => (
            <SoundButton
              key={index}
              name={item.name}
              onPress={() => playSound(item.file)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
