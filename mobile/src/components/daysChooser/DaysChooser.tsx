import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import DayButton from './components/DayButton';
import { styles } from './DaysChooser.styles';

interface DaysChooserProps {
  selectedDays: number[];
  setSelectedDays: React.Dispatch<React.SetStateAction<number[]>>;
}

const DaysChooser: FC<DaysChooserProps> = ({
  selectedDays,
  setSelectedDays,
}) => {
  const isDaySelected = useCallback(
    (day: number) => {
      return !(selectedDays.findIndex(it => it === day) === -1);
    },
    [selectedDays],
  );

  const handleDaySelection = useCallback((value: boolean, day: number) => {
    if (value) {
      setSelectedDays(prev => [...prev, day]);
    } else {
      setSelectedDays(prev => prev.filter(d => d !== day));
    }
  }, []);

  return (
    <View style={styles.container}>
      <DayButton
        selected={isDaySelected(0)}
        title="D"
        onPress={(value: boolean) => handleDaySelection(value, 0)}
      />
      <DayButton
        selected={isDaySelected(1)}
        title="S"
        onPress={(value: boolean) => handleDaySelection(value, 1)}
      />
      <DayButton
        selected={isDaySelected(2)}
        title="T"
        onPress={(value: boolean) => handleDaySelection(value, 2)}
      />
      <DayButton
        selected={isDaySelected(3)}
        title="Q"
        onPress={(value: boolean) => handleDaySelection(value, 3)}
      />
      <DayButton
        selected={isDaySelected(4)}
        title="Q"
        onPress={(value: boolean) => handleDaySelection(value, 4)}
      />
      <DayButton
        selected={isDaySelected(5)}
        title="S"
        onPress={(value: boolean) => handleDaySelection(value, 5)}
      />
      <DayButton
        selected={isDaySelected(6)}
        title="S"
        onPress={(value: boolean) => handleDaySelection(value, 6)}
      />
    </View>
  );
};

export default DaysChooser;
