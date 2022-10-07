import {
  AdsRequestDto,
  AdsResponseDto,
  DiscordResonseDto,
  GameResponseDto,
} from '../models/dto/servicesDtos';
import { api } from './Api';

export const Services = () => {
  const getGameList = async (): Promise<GameResponseDto[]> => {
    const response = await api.get('games');
    return response.data;
  };

  const getAdsList = async (id: string): Promise<AdsResponseDto[]> => {
    const response = await api.get(`games/${id}/ads`);
    return response.data;
  };

  const getDiscord = async (adsId: string): Promise<DiscordResonseDto> => {
    const response = await api.get(`ads/${adsId}/discord`);
    return response.data;
  };

  const createAds = async (gameId: string, ads: AdsRequestDto): Promise<AdsResponseDto> => {
    const response = await api.post(`games/${gameId}/ads`, ads);
    return response.data;
  };

  return {
    getGameList,
    getAdsList,
    getDiscord,
    createAds,
  };
};
