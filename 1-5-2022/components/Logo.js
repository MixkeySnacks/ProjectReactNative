import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Logo = () => {
  const title = 'TNI';
  const isTitle = false;

  const showData = () => <Text>hello world</Text>;

  return (
    <View>
      <Text style={{color: 'blue', fontSize: 20}}>Thai-Land</Text>
      {isTitle === true && <Text>{title}</Text>}
      {isTitle === true ? <Text>{title}</Text> : <Text>wow solo</Text>}
      {showData()}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
