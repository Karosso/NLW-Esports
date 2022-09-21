import { FormEvent, useCallback, useEffect, useState } from "react";
import { IGame } from "../../models/interface/IGame";
import { Services } from "../../services/Services";

const useHome = () => {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const services = Services();
    const getGameList = async () => {
      try {
        const result = await services.getGameList();
        setGames(result);
      } catch (error) {
        console.log({ error });
      } finally {
      }
    };
    firstLoad && getGameList();
    setFirstLoad(false);
  }, [firstLoad]);

  const handleSubmit = useCallback(async (evt: FormEvent) => {
    evt.preventDefault();
    const services = Services();
    const formData = new FormData(evt.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const weekDays = [
      data?.Dom ? 0 : 99,
      data?.Seg ? 1 : 99,
      data?.Ter ? 2 : 99,
      data?.Qua ? 3 : 99,
      data?.Qui ? 4 : 99,
      data?.Sex ? 5 : 99,
      data?.Sáb ? 6 : 99,
    ].filter((it) => it !== 99);
    const adsRequest = {
      name: data.name.toString(),
      yearsPlaying: Number(data.yearsPlaying),
      discord: data.discord.toString(),
      weekDays,
      hoursStart: data.hoursStart.toString(),
      hoursEnd: data.hoursEnd.toString(),
      useVoiceChannel: data?.useVoiceChannel === "on" ? true : false,
    };
    try {
      const result = await services.createAds(data.game.toString(), adsRequest);
      console.log({ result });
      setOpenModal(false);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return {
    games,
    handleSubmit,
    openModal,
    setOpenModal,
  };
};

export default useHome;
