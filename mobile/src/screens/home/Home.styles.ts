import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 214,
    height: 100,
    marginTop: 40,
    marginBottom: 24,
  },
  list: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  connect: {
    paddingHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    paddingVertical: 10,
  },
  text: {
    marginLeft: 8,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});
