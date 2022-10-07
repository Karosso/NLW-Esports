import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  text: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlign: 'center',
  }
});
