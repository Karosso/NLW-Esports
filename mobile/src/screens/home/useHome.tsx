import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { IGame } from '../../models/interfaces/IGame';
import { GameScreenNavigationProps } from '../../routes/app/AppStack.types';
import { Services } from '../../services/Services';

const useHome = () => {
  const navigation = useNavigation<GameScreenNavigationProps>();
  const [games, setGames] = useState<IGame[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const getGameList = useCallback( async () => {
    const gameService = Services();
    try {
      const result = await gameService.getGameList();
      setGames(result);
    } catch (error) {
      console.log({ error });
    } finally {
    }
  },[]);

  useEffect(() => {
    firstLoad && getGameList();
    setFirstLoad(false);
  }, [firstLoad, getGameList]);

  const handleGame = useCallback(
    (game: IGame) => {
      navigation.navigate('Game', { ...game });
    },
    [navigation],
  );

  const handleAds = useCallback(
    () => {
      navigation.navigate('CreateAds', {refreshGameList: getGameList});
    },
    [getGameList, navigation],
  );

  return {
    games,
    handleGame,
    handleAds,
  };
};

export default useHome;
