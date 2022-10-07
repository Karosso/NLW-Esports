import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },
  error: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4,
    textAlign: 'left'
  },
  button: {
    marginTop: 16,
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 32,
  },
  buttonText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});
