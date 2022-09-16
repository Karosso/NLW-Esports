import { NavigationProp, RouteProp } from '@react-navigation/native';
import { IGame } from '../../models/interfaces/IGame';

export type AppStackTypes = {
  Home: undefined;
  Game: IGame;
};

export type GameScreenNavigationProps = NavigationProp<
  AppStackTypes,
  'Game'
>;

export type GameScreenRouteProps = RouteProp<
  AppStackTypes,
  'Game'
>;

export type GameScreenProps = {
  navigation: GameScreenNavigationProps;
  route: GameScreenRouteProps;
};
