import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginVertical: 18,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  form: {
    flex: 1,
    paddingHorizontal: 32,
    overflow: 'scroll',
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginBottom: 10,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 8,
    borderColor: THEME.COLORS.BACKGROUND_900,
    marginBottom: 16,
  },
  placeholder: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  pickerItem: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  dropDownContainer: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderColor: THEME.COLORS.BACKGROUND_900,
    borderTopColor: THEME.COLORS.TEXT,
  },
  input: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 8,
    borderColor: THEME.COLORS.BACKGROUND_900,
    marginBottom: 16,
    paddingStart: 10,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT,
  },
  rowContainer: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBox: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginLeft: 8,
  },
  buttonsContainer: {
    width: '100%',
    marginVertical: 20,
    // paddingRight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cancel: {
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: THEME.COLORS.CAPTION_400,
    borderRadius: 6,
    paddingVertical: 10,
  },
  publish: {
    width: 120,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    paddingVertical: 10,
  },
  publishText: {
    marginLeft: 8,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});