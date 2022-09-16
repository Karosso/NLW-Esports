import { View, Text, ColorValue } from 'react-native';
import React, { FC } from 'react';
import { styles } from './DuoInfo.styles';
import { THEME } from '../../theme';

interface DuoInfoProps {
  label: string;
  value: string;
  valueColor?: ColorValue;
}

const DuoInfo: FC<DuoInfoProps> = ({ label, value, valueColor = THEME.COLORS.TEXT}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={{...styles.value, color: valueColor }} numberOfLines={1}>{value}</Text>
    </View>
  );
};

export default DuoInfo;
