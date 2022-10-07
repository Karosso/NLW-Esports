import { useCallback, useEffect, useState } from 'react';
import { IAds } from '../../models/interfaces/IGame';
import { Services } from '../../services/Services';

const useGame = (gameId: string) => {
  const [adsList, setAdsList] = useState<IAds[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedDiscord, setSelectedDiscord] = useState('');
  const [loading, setLoading] = useState(false);

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
  }, [firstLoad, gameId]);

  const handleConnect = useCallback(async (id: string) => {
    const services = Services();
    try {
      setLoading(true);
      const { discord } = await services.getDiscord(id);
      setSelectedDiscord(discord);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleHideDiscord = useCallback(() => {
    setSelectedDiscord('');
  }, []);

  return {
    adsList,
    handleConnect,
    selectedDiscord,
    loading,
    handleHideDiscord,
  };
};

export default useGame;
