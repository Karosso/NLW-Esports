import { ImageSourcePropType } from 'react-native';

export interface IGame {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}
