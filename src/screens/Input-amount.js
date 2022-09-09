import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Input2 from '../components/Input2';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {getamount, getnotes} from '../redux/reducers/transactions';
import {getUserLogin} from '../redux/actions/profile';
import {ScrollView} from 'react-native-gesture-handler';

const Validation = Yup.object().shape({
  amount: Yup.number().min(1000).required('Required'),
});

const FormInput = ({handleChange, handleSubmit, errors, profile}) => {
  return (
    <View style={stylesLocal.padMain}>
      <View style={stylesLocal.inputFormat}>
        <Input2
          onChange={handleChange}
          style={stylesLocal.marTop}
          placeholder="0.00"
          name="amount"
          type="numeric"
        />
        <Text style={stylesLocal.marTop}>Rp {profile.balance}</Text>
        <Input2
          onChange={handleChange}
          name="notes"
          placeholder="Add some notes"
          icon="pencil"
          type="text"
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleSubmit} style={stylesLocal.btnOne}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InputAmount = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.transactions.name);
  const image = useSelector(state => state.transactions.image);
  const phone = useSelector(state => state.transactions.phone);
  const receiver = useSelector(state => state.transactions.receiver);
  const profile = useSelector(state => state.profile.data);
  const onSubmit = val => {
    if (parseInt(val.amount) < parseInt(profile.balance)) {
      dispatch(getamount(val.amount));
      dispatch(getnotes(val.notes));
      navigation.navigate('Confirmation');
    } else {
      Alert.alert('insuficent fund');
    }
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
  return (
    <ScrollView>
      <View style={stylesLocal.header}>
        <View style={stylesLocal.headerContent}>
          <View style={stylesLocal.pict} />
          <View style={stylesLocal.marLeft}>
            <Text>{name}</Text>
            <Text>{phone}</Text>
          </View>
        </View>
      </View>
      <Formik
        validationSchema={Validation}
        initialValues={{amount: '', notes: ''}}
        onSubmit={onSubmit}>
        {props => <FormInput {...props} profile={profile} />}
      </Formik>
    </ScrollView>
  );
};

const stylesLocal = StyleSheet.create({
  padMain: {
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  marLeft: {
    marginLeft: 15,
  },
  marTop: {
    marginVertical: 50,
  },
  pict: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    height: Dimensions.get('screen').height * (15 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
  },
  headerContent: {
    backgroundColor: SECONDARY_COLOR,
    flexDirection: 'row',
    width: Dimensions.get('screen').width * (90 / 100),
    height: Dimensions.get('screen').height * (10 / 100),
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  inputFormat: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  btnOne: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 3,
  },
});

export default InputAmount;
