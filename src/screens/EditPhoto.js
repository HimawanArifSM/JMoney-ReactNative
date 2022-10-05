import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {PRIMARY_COLOR} from '../styles/constant';

const EditPhoto = () => {
  const data = useSelector(state => state.profile.data);

  return (
    <View style={style.wrap}>
      <View style={style.contain}>
        <Image source={{uri: data.picture}} style={style.imaging} />
      </View>
      <View style={style.buttonWraper}>
        <View style={style.borderBtn}>
          <TouchableOpacity style={style.button}>
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
        <View style={style.borderBtn}>
          <TouchableOpacity style={style.button}>
            <Text>Galery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imaging: {
    width: Dimensions.get('screen').width - 30,
    aspectRatio: 1,
  },
  buttonWraper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBtn: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 4,
    backgroundColor: PRIMARY_COLOR,
    borderColor: 'black',
    elevation: 3,
  },
});

export default EditPhoto;
