import React, { FC, memo, useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../../theme';
import { styles } from './DayButton.styles';

interface DayButtonProps {
  title: string;
  onPress: (select: boolean) => void;
  selected: boolean;
}

const DayButton: FC<DayButtonProps> = ({ title, onPress, selected }) => {
  const handleSelect = useCallback(() => {
    onPress(!selected);
  }, [onPress, selected]);

  return (
    <TouchableOpacity
      onPress={handleSelect}
      style={{
        ...styles.container,
        backgroundColor: selected
          ? THEME.COLORS.PRIMARY
          : THEME.COLORS.BACKGROUND_900,
      }}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(DayButton);
