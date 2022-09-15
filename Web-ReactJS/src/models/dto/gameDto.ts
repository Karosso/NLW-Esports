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
