import {Dimensions, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from './constant';

const height1 = Dimensions.get('screen').width / 3;
const height2 = Dimensions.get('screen').height - 280;

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    height: Dimensions.get('screen').height,
    backgroundColor: PRIMARY_COLOR,
  },
  wrapper2: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  colorPrim: {
    color: PRIMARY_COLOR,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height1,
  },
  mainContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 16,
    paddingBottom: 20,
    // height: height2,
  },
  textMain: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'center',
  },
  textSecondary: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  headText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  padA: {
    paddingTop: 40,
  },
  padB: {
    paddingBottom: 45,
  },
  marA: {
    marginTop: 20,
  },
  marB: {
    marginTop: 50,
  },
  marC: {
    marginTop: 60,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  padMain: {
    padding: 10,
  },
  padBtm: {
    marginBottom: 10,
  },
});

export default styles;
