export interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export interface IAds {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hoursStart: string;
  hoursEnd: string;
}

export interface ICreateAdsForm {
  gameId: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  weekDays: number[];
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
}
