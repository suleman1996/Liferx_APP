import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  card: {
    borderTopWidth: 6,
    borderRadius: 12,
    backgroundColor: Colors.WHITE,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    width: w('60%'),
  },
  text: {
    fontSize: w(16),
    color: Colors.BLACK,
    marginBottom: 16,
    fontFamily:FONTS.HIND_REGULAR
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    flex:1,
    alignItems:'center',
    flexDirection:'row'
  },
  bold: {
    fontFamily: FONTS.HIND_BOLD,
  },
  role: {
    color: Colors.GRAY,
    fontSize:h('1.7%'),
    flex:1,
    fontFamily:FONTS.HIND_REGULAR
  },
});
export default styles;
