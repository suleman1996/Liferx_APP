import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';
import { w } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: Colors.APP_COLOR,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    height: w(50),
  },
  cancelText: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
    color: Colors.WHITE,
  },
  logoutText: {
    color: Colors.WHITE,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
  },
});

export default styles;
