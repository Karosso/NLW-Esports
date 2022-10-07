import React, { FC } from 'react';
import { Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IValidationFormErrors } from '../../models/interfaces/IValidationFrom';
import { THEME } from '../../theme';
import { styles } from './ErrorsModal.styles';

interface ErrorsModalProps extends ModalProps {
  errors: IValidationFormErrors | null;
  handleClose: () => void;
}

const ErrorsModal: FC<ErrorsModalProps> = ({
  errors,
  handleClose,
  ...rest
}) => {
  if (!errors) {
    return <></>;
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
            <Icon name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <Icon
            name="alert-circle-outline"
            size={64}
            color={THEME.COLORS.ALERT}
          />

          {errors.gameId && <Text style={styles.error}>{errors.gameId}</Text>}
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          {errors.yearsPlaying && (
            <Text style={styles.error}>{errors.yearsPlaying}</Text>
          )}
          {errors.discord && <Text style={styles.error}>{errors.discord}</Text>}
          {errors.weekDays && (
            <Text style={styles.error}>{errors.weekDays}</Text>
          )}
          {errors.hoursStart && (
            <Text style={styles.error}>{errors.hoursStart}</Text>
          )}
          {errors.hoursEnd && (
            <Text style={styles.error}>{errors.hoursEnd}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorsModal;
