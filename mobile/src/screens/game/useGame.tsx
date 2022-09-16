import { useEffect, useState } from 'react';
import { IAds } from '../../models/interfaces/IGame';
import { Services } from '../../services/Services';

const useGame = (gameId: string) => {
  const [adsList, setAdsList] = useState<IAds[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const gameService = Services();
    const getGameList = async () => {
      try {
        const result = await gameService.getAdsList(gameId);
        setAdsList(result);
      } catch (error) {
        console.log({ error });
      } finally {
      }
    };
    firstLoad && getGameList();
    setFirstLoad(false);
    console.log('getGameList');
  }, [firstLoad, gameId]);

  return {
    adsList,
  };
};

export default useGame;
