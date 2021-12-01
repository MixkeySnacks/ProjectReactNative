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
  TextInput
} from 'react-native';

/*const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView
      contentContainerStyle={styles.scrollView} 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }
      >
      <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
};*/
const App = () => {
  const [inputValue, setInputValue] = useState('');

  const checkValueIsNumberOrNot = ()=>{
    if(isNaN(inputValue)){
      alert("It is not a number");
      
    }else{
      alert("It is a number");
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput
        placeholder= "Enter Text"
        style = {styles.textInputStyle}
        onChangeText ={(inputValue)=>{setInputValue(inputValue)}}
        />
        <Button
        title="Check Value is Number or Not"
        color="grey"
        onPress={checkValueIsNumberOrNot}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  countContainer: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  input :{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
  },
  textInputStyle: {
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
  },
});
export default App;
