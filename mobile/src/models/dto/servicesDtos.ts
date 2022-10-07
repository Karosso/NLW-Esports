import { ImageSourcePropType } from 'react-native';

export interface GameResponseDto {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export interface GameRequestDto {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
}

export interface AdsResponseDto {
  id: string;
  name: string;
  weekDays: string[],
  useVoiceChannel: boolean,
  yearsPlaying: number,
  hoursStart: string,
  hoursEnd: string,
}

export interface DiscordResonseDto {
  discord: string;
}

export interface AdsRequestDto {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
}