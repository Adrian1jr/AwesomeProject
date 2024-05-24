import {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Text} from 'react-native-paper';

interface SoundButtonInterface {
  name: string;
  onPress: () => void;
}

export const SoundButton = ({name, onPress}: SoundButtonInterface) => {
  const animation = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    transform: [{scale: animation}],
  };

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}>
        <Animated.View style={[styles.button, animatedStyle]}>
          <FastImage
            style={styles.image}
            source={{
              uri: 'https://play-lh.googleusercontent.com/Y7Y9mJr2YidXFeXCK_FcgdIhA7s7c2ZSx5PG2yt_RO5ZdXUYhcooAWqXVFzE7d0Y8gSZ=w600-h300-pc0xffffff-pd',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 70, // Aumenta la altura para dar espacio al texto debajo de la imagen
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Sombra para Android
    elevation: 5,
  },
  image: {
    width: 110,
    height: 100,
    borderRadius: 50,
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
