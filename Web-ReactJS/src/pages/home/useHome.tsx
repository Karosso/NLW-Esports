import React, { useEffect, useState } from 'react'
import { IGame } from '../../models/interface/IGame';
import { GameService } from '../../services/gameService/GameService';

const useHome = () => {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);
  
  useEffect(() => {
    const gameService = GameService()
    const getGameList = async () => {
      try {
        const result = await gameService.getGameList();
        setGames(result);
      } catch (error) {
        console.log({error})
      } finally {
      }
    }
    firstLoad && getGameList()
    setFirstLoad(false)
    console.log('getGameList')
  }, [firstLoad])
  

  return {
    games
  }
}

export default useHome;