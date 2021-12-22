import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

const TextInputPractice1 = () => {
  const [inputValue1, setInputName] = useState('');
  const [inputValue2, setInputEmail] = useState('');
  const onPressAlert = () => {
    if (!inputValue1.trim()) {
      alert('Please Enter Name');
      return;
    } else if (!inputValue2.trim()) {
      alert('Please Enter Email');
      return;
    } else {
      alert('Success');
      return;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Name"
          onChangeText={inputValue1 => {
            setInputName(inputValue1);
          }}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          onChangeText={inputValue2 => {
            setInputEmail(inputValue2);
          }}
        />
      </View>
      <View style={styles.ButtonMargin}>
        <Button 
        onPress={onPressAlert} 
        title="SUBMIT" 
        color="#FF8584"/>
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 20,
  },
  ButtonMargin:{
      marginTop:20,
  }
});
