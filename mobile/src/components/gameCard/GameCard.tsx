import React, { FC } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IGame } from '../../models/interfaces/IGame';
import { THEME } from '../../theme';
import { styles } from './GameCard.styles';

interface GameCardProps extends TouchableOpacityProps {
  data: IGame;
}

const GameCard: FC<GameCardProps> = ({ data, onPress, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest} onPress={onPress}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GameCard;
