import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { AdsRequestDto } from '../../models/dto/servicesDtos';
import { ICreateAdsForm, IGame } from '../../models/interfaces/IGame';
import { IValidationFormErrors } from '../../models/interfaces/IValidationFrom';
import { Services } from '../../services/Services';
import { convertAmpmHours } from '../../utils/Utils';
import { validate } from './Validation';

const UseCreateAds = (refreshGameList: () => void) => {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [gameId, setGameId] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [useVoiceChannel, setUseVoiceChat] = useState(false);
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [name, setName] = useState('');
  const [yearsPlaying, setYearsPlaing] = useState('');
  const [discord, setDiscord] = useState('');
  const [errors, setErrors] = useState<IValidationFormErrors | null>(null);

  useEffect(() => {
    const services = Services();
    const getGameList = async () => {
      try {
        setLoading(true);
        const result = await services.getGameList();
        setGames(result);
      } catch (error) {
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };
    firstLoad && getGameList();
    setFirstLoad(false);
  }, [firstLoad]);

  const gameList = useMemo(
    () => games?.map(it => ({ label: it.title, value: it.id })),
    [games],
  );

  const handleSubmit = useCallback(async () => {
    const formData: ICreateAdsForm = {
      gameId,
      discord,
      hoursEnd: endHour,
      hoursStart: startHour,
      name,
      useVoiceChannel,
      yearsPlaying,
      weekDays: selectedDays,
    };
    const { errors: _errors, hasError } = validate(formData);
    if (hasError) {
      setErrors(_errors);
    } else {
      const data: AdsRequestDto = {
        name: formData.name,
        useVoiceChannel: formData.useVoiceChannel,
        weekDays: formData.weekDays,
        discord: formData.discord,
        hoursStart: convertAmpmHours(formData.hoursStart),
        hoursEnd: convertAmpmHours(formData.hoursEnd),
        yearsPlaying: Number(formData.yearsPlaying),
      };
      try {
        const services = Services();
        const result = await services.createAds(gameId, data);
        Alert.alert('Anúncio criado com sucesso!');
        __DEV__ && console.log({ result });
        refreshGameList();
        navigation.goBack();
      } catch (error) {
        Alert.alert('Falha ao criar anúncio');
        __DEV__ && console.log({ error });
      }
    }
  }, [
    discord,
    endHour,
    gameId,
    name,
    navigation,
    refreshGameList,
    selectedDays,
    startHour,
    useVoiceChannel,
    yearsPlaying,
  ]);

  const handleCloseModal = useCallback(() => {
    setErrors(null);
  }, []);

  return {
    loading,
    navigation,
    gameList,
    open,
    setOpen,
    setGameId,
    gameId,
    name,
    setName,
    discord,
    yearsPlaying,
    setYearsPlaing,
    setDiscord,
    selectedDays,
    setSelectedDays,
    setStartHour,
    setEndHour,
    useVoiceChannel,
    setUseVoiceChat,
    handleSubmit,
    errors,
    handleCloseModal,
  };
};

export default UseCreateAds;
