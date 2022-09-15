import { GameResponseDto } from "../../models/dto/gameDto"
import { api } from "../Api"

export const GameService = () => {

  const getGameList = async (): Promise<GameResponseDto[]> => {
    const response = await api.get('games')
    return response.data;
  }

  return {
    getGameList,
  }
}