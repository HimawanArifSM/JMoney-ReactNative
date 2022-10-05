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
import Icon from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';

const EditPhoto = () => {
  const data = useSelector(state => state.profile.data);
  const [picture, setPicture] = React.useState(null);
  const [uploading, setUpload] = React.useState(false);
  const pickImage = async () => {
    const pict = await launchImageLibrary();
    if (pict.assets) {
      setPicture(true);
      setPicture(pict.assets[0].uri);
    }
  };
  return (
    <View style={style.wrap}>
      <View style={style.contain}>
        <Image source={{uri: data.picture}} style={style.imaging} />
      </View>
      <View style={style.buttonWraper}>
        <View style={style.borderBtn}>
          <TouchableOpacity style={style.button}>
            <Icon name={'camerao'} size={36} />
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
        <View style={style.borderBtn}>
          <TouchableOpacity style={style.button}>
            <Icon name={'picture'} size={36} />
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
    backgroundColor: 'gray',
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
