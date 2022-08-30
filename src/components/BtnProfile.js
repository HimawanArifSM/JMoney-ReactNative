import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {SECONDARY_COLOR} from '../styles/constant';

const BtnProfile = ({text, icon, navigation, navig}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={stylesLocal.wraper}>
      <Text style={stylesLocal.textSecondary}>{text}</Text>
      <Icon name={icon} size={30} />
      {icon || text === 'Logout' ? null : (
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? {SECONDARY_COLOR} : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
    elevation: 3,
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  textSecondary: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center',
  },
});

export default BtnProfile;
