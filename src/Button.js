import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.btnTitle}>{title}</Text>
  </TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '40%',
    backgroundColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  btnTitle: {
    fontSize: 16,
    color: 'white',
  },
});
