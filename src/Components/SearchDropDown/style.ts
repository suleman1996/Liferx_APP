import { Platform, StyleSheet } from 'react-native';
import { h, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  mainInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: w(20),
    borderRadius: 8,
    borderColor: Colors.GRAY,
    marginTop: h(35),
  },
  input: {
    flex: 1,
    height: h(60),
    fontSize: w(15),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(15),
    color: Colors.APP_COLOR,
  },
  listContainer: {
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    marginLeft: w(20),
    borderRadius: 8,
    marginTop: 10,
    borderColor: Colors.APP_COLOR,
    position: 'absolute',
    top: '100%',
    zIndex: 1000,
    width: '90%',
  },
  imageHeight: {
    height: w(12),
    width: w(12),
    borderRadius: 5,
  },
  outerView: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: w(15),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
  description: {
    fontSize: w(2.9),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.BLACK,
    width: w(72),
  },
  innerView: {
    marginLeft: 10,
  },
  scrollContent: {
    flexGrow: 1,
  },
  noResultsContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 15,
    borderColor: Colors.APP_COLOR,
    marginTop: 10,
    paddingBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    width: '90%',
  },
  noResultsText: {
    fontSize: w(15),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
    marginTop: 20,
    textAlign: 'center',
    maxWidth: w(300),
    flexWrap: 'wrap',
    lineHeight: 18,
  },
});

export default styles;
