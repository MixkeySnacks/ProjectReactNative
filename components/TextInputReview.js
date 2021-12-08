import React from 'react';
import {useState, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  TextInput,
} from 'react-native';

const TextInputReview = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>{inputValue}</Text>
        <TextInput
          placeholder="Enter Text"
          style={styles.input}
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 5,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8'
  },
});
export default TextInputReview;
