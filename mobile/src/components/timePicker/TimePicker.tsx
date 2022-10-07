import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './TimePicker.styles';

const minutesList = Array.from({ length: 4 }, (_, i) => ({
  value: (i * 15).toString().padStart(2, '0'),
  label: (i * 15).toString().padStart(2, '0'),
}));
const hoursList = Array.from({ length: 12 }, (_, i) => ({
  value: (i + 1).toString().padStart(2, '0'),
  label: (i + 1).toString().padStart(2, '0'),
}));
const ampmOptions = [
  {
    label: 'AM',
    value: 'AM',
  },
  {
    label: 'PM',
    value: 'PM',
  },
];

interface TimePickerProps {
  label: string;
  onChange: (time: string) => void;
}

const TimePicker: FC<TimePickerProps> = ({ label, onChange }) => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [ampm, setAmpm] = useState<'AM' | 'PM' | ''>('AM');

  const [openHours, setOpenHours] = useState(false);
  const [openMinutes, setOpenMinutes] = useState(false);
  const [openAmpm, setOpenAmpm] = useState(false);

  useEffect(() => {
    onChange(`${hours}:${minutes} ${ampm}`);
  }, [ampm, hours, minutes, onChange]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.timeContainer}>
        <View>
          <DropDownPicker
            items={hoursList}
            placeholder="00"
            placeholderStyle={styles.placeholder}
            open={openHours}
            setOpen={setOpenHours}
            setValue={setHours}
            value={hours}
            textStyle={styles.pickerItem}
            style={styles.pickerContainer}
            dropDownContainerStyle={styles.dropDownContainer}
            labelStyle={styles.pickerItem}
            showArrowIcon={false}
            showTickIcon={false}
            listMode="SCROLLVIEW"
          />
        </View>
        <Text style={styles.separator}>:</Text>
        <View>
          <DropDownPicker
            items={minutesList}
            placeholder="00"
            placeholderStyle={styles.placeholder}
            open={openMinutes}
            setOpen={setOpenMinutes}
            setValue={setMinutes}
            value={minutes}
            textStyle={styles.pickerItem}
            style={styles.pickerContainer}
            dropDownContainerStyle={styles.dropDownContainer}
            labelStyle={styles.pickerItem}
            showArrowIcon={false}
            showTickIcon={false}
            listMode="SCROLLVIEW"
          />
        </View>
        <View>
          <DropDownPicker
            items={ampmOptions}
            placeholder="--"
            placeholderStyle={styles.placeholder}
            open={openAmpm}
            setOpen={setOpenAmpm}
            setValue={setAmpm}
            value={ampm}
            textStyle={styles.pickerItem}
            style={styles.pickerContainer}
            dropDownContainerStyle={styles.dropDownContainer}
            labelStyle={styles.pickerItem}
            showArrowIcon={false}
            showTickIcon={false}
            listMode="SCROLLVIEW"
          />
        </View>
      </View>
    </View>
  );
};

export default TimePicker;
