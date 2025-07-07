import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginRight: 12,
    borderRadius: 16,
    backgroundColor: Colors.LIGHT_GRAY,
    paddingTop: h(20),
    paddingBottom: h(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  name: {
    fontSize: w(16),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
  },
  profession: {
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    maxWidth: w(144),
    marginTop: h(10),
  },
  locationIcon: {
    height: h(18),
    width: w(18),
  },
  location: {
    fontSize: w(12),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(8),
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: h(12),
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: w(20),
    alignItems: 'center',
  },
  docImage: {
    height: h(120),
    width: w(120),
  },
});
export default styles;
