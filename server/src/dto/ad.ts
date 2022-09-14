export type AdRequest = {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
};

export type AdResponse = {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hoursStart: number;
  hoursEnd: number;
  useVoiceChannel: boolean;
};
