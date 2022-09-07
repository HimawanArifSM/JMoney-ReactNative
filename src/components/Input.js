import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  placeholder,
  icon,
  type,
  secure,
  onChange,
  value,
  defaultValue,
  name,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={20} color={PRIMARY_COLOR} />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={!showText}
          onChangeText={onChange(name)}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
      {secure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={styles.iconWrapper}>
            <Icon
              name={showText ? 'eye-slash' : 'eye'}
              size={20}
              color={PRIMARY_COLOR}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
});
export default Input;
