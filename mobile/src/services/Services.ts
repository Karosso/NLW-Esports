import { AdsResponseDto, GameResponseDto } from '../models/dto/servicesDtos';
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

  return {
    getGameList,
    getAdsList,
  };
};
