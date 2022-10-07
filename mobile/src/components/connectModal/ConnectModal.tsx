import React, { FC } from 'react';
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableOpacity,
} from 'react-native';
import { THEME } from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './ConnectModal.styles';
import Heading from '../heading/Heading';

interface ConnectModalProps extends ModalProps {
  discord: string;
  handleClose: () => void;
}

const ConnectModal: FC<ConnectModalProps> = ({
  discord,
  handleClose,
  ...rest
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
            <Icon name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <Icon name="checkmark-circle-outline" size={64} color={THEME.COLORS.SUCCESS} />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={() => {}}
            disabled={true}>
            <Text style={styles.discord}>
                {discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConnectModal;
