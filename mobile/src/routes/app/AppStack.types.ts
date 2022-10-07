import { NavigationProp, RouteProp } from '@react-navigation/native';
import { IGame } from '../../models/interfaces/IGame';

interface ICreateAds {
  refreshGameList: () => void;
}

export type AppStackTypes = {
  Home: undefined;
  Game: IGame;
  CreateAds: ICreateAds;
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

export type CreateAdsScreenNavigationProps = NavigationProp<
  AppStackTypes,
  'CreateAds'
>;

export type CreateAdsScreenRouteProps = RouteProp<
  AppStackTypes,
  'CreateAds'
>;

export type CreateAdsScreenProps = {
  navigation: CreateAdsScreenNavigationProps;
  route: CreateAdsScreenRouteProps;
};
