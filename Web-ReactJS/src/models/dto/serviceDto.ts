export interface GameResponseDto {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
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

export interface AdsResponseDto {
  createdAt: string;
  discord: string;
  gameId: string;
  hoursEnd: string;
  hoursStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export interface DiscordResonseDto {
  discord: string;
}