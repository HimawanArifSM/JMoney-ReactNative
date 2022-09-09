import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import {useDispatch, useSelector} from 'react-redux';

const Modal = ({show, setShow}) => {
  // const [show, setShow] = React.useState(false);
  // const [amount, setAmount] = React.useState('');
  // const token = useSelector(state => state.auth.token);
  // const successmsg = useSelector(state => state.transaction.successmsg);
  // const dispatch = useDispatch();
  // const submit = () => {
  //   const request = {amount};
  //   dispatch(topUp({token, request}));
  // };
  // React.useEffect(() => {
  //   if (successmsg) {
  //     dispatch(resetmsg());
  //     dispatch(getUserLogin(token));
  //     setShow(false);
  //   }
  // }, [successmsg]);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={() => setShow(!show)}>
      <View style={styleLocal.modal}>
        <View style={styleLocal.wrapModal}>
          <Text style={styleLocal.titleModal}>Input Amount Here</Text>
          <TextInput
            style={styleLocal.input}
            keyboardType="decimal-pad"
            placeholder="Min 20000"
            // value={amount}
            // onChangeText={setAmount}
          />
          <View style={styleLocal.wrapButton}>
            <TouchableOpacity
              style={styleLocal.cancel}
              onPress={() => setShow(!show)}>
              <Text style={styleLocal.acount}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLocal.topUp}>
              <Text style={styleLocal.acount}>Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styleLocal = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  wrapModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 2,
    margin: 50,
    elevation: 4,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 30,
    color: TEXT_DARK,
  },
  input: {
    height: 40,
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 1,
    fontSize: 18,
    color: TEXT_DARK,
  },
  wrapButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cancel: {
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
    elevation: 6,
  },
  acount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: TEXT_DARK,
  },
  topUp: {
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    elevation: 6,
  },
});

export default Modal;
