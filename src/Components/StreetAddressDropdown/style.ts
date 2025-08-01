import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  container: {
    marginTop: h(20),
    zIndex: 10,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.APP_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: w(12),
    backgroundColor: Colors.WHITE,
    height: h(60),
  },
  input: {
    flex: 1,
    color: Colors.APP_COLOR,
    fontSize: w(16),
    paddingLeft: w(12),
    height: h(60),
    borderRadius: 12,
    maxWidth:w(350)
  },
  icon: {
    marginRight: w(20),
  },
  dropdown: {
    marginTop: h(8),
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    maxHeight: h(250),
    borderWidth: 1,
    borderColor: Colors.APP_COLOR,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  item: {
    paddingVertical: h(12),
    paddingLeft: w(25),
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  itemText: {
    color: Colors.APP_COLOR,
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  itemSecondary: {
    color: Colors.DARK_GREY,
    fontSize: w(14),
    marginTop: h(5),
  },
  label: {
    fontSize: w(16),
    color: Colors.BLACK,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
});
export default styles;
