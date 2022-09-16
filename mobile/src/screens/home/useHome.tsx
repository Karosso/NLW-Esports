import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { IGame } from '../../models/interfaces/IGame';
import { GameScreenNavigationProps } from '../../routes/app/AppStack.types';
import { Services } from '../../services/Services';

const useHome = () => {
  const navigation = useNavigation<GameScreenNavigationProps>();
  const [games, setGames] = useState<IGame[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const gameService = Services();
    const getGameList = async () => {
      try {
        const result = await gameService.getGameList();
        setGames(result);
      } catch (error) {
        console.log({ error });
      } finally {
      }
    };
    firstLoad && getGameList();
    setFirstLoad(false);
    console.log('getGameList');
  }, [firstLoad]);

  const handleGame = useCallback(
    (game: IGame) => {
      navigation.navigate('Game', { ...game });
    },
    [navigation],
  );

  return {
    games,
    handleGame,
  };
};

export default useHome;
