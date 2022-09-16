import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginRight: 16,
  },
  connect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    paddingVertical: 8,
  },
  text: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});
