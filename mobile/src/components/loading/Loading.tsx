import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './Loading.styles';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
