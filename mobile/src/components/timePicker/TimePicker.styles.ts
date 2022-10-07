import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // zIndex: 999,
    // width: 100,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginBottom: 8,
  },
  pickerContainer: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 8,
    borderColor: THEME.COLORS.BACKGROUND_900,
    width: 50,
  },
  placeholder: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: 'center',
  },
  pickerItem: {
    textAlign: 'center',
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    // backgroundColor: 'green'
  },
  dropDownContainer: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderColor: THEME.COLORS.BACKGROUND_900,
    borderTopColor: THEME.COLORS.TEXT,
    overflow: 'visible',
    maxHeight: 1000,
    zIndex: 50,
  },
  input: {
    borderRadius: 8,
    borderColor: THEME.COLORS.BACKGROUND_900,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT
  },
  timeContainer: {
    borderRadius: 8,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  separator: {
    textAlign: 'center',
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  }
});
