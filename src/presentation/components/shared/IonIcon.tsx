import Icon from 'react-native-vector-icons/Ionicons';

interface IonIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcon = ({name, size = 20, color = 'black'}: IonIconProps) => {
  return <Icon name={name} size={size} color={color} />;
};
