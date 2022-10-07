import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IAds } from '../../models/interfaces/IGame';
import { THEME } from '../../theme';
import { getWeekDays } from '../../utils/Utils';
import DuoInfo from '../duoInfo/DuoInfo';
import { styles } from './DuoCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native';

interface DuoCardProps {
  ads: IAds;
  handleConnect: (id: string) => void;
  loading: boolean;
}

const DuoCard: FC<DuoCardProps> = ({ ads, handleConnect, loading }) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={ads.name} />
      <DuoInfo label="Tempo de jogo" value={ads.yearsPlaying.toString()} />
      <DuoInfo label="Disponibilidade" value={getWeekDays(ads.weekDays)} />
      <DuoInfo
        label="Horário"
        value={`De ${ads.hoursStart} até ${ads.hoursEnd} hrs`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={ads.useVoiceChannel ? 'Sim' : 'Não'}
        valueColor={
          ads.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity
        style={styles.connect}
        onPress={() => handleConnect(ads.id)}>
        {loading ? (
          <ActivityIndicator/>
        ) : (
          <>
            <Icon
              name="game-controller-outline"
              size={20}
              color={THEME.COLORS.TEXT}
            />
            <Text style={styles.text}>Conectar</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DuoCard;
