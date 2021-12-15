import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View,Alert} from 'react-native';

const AlertExample = () => {
  const simpleAlertHanler = () => {
      alert('Hello im Simple Alert')
  };
  const twoOptionsHanler = () => {
    Alert.alert('Hello','Im two option alert. Do you want to cancel me?',
    [
        {
            text: 'Yes',
            onPress : ()=>console.log('Yes Pressed')
        },
        {
            text:'No',
            onPress: ()=>console.log('No Pressed')
        }
    ],
    )
};
const threeOptionsHanler = () => {
    Alert.alert('Hello','Im Three option alert. Do you want to cancel me?',
    [
        {
            text: 'Maybe',
            onPress : ()=>console.log('Maybe Pressed')
        },
        {
            text:'Yes',
            onPress: ()=>console.log('Yes Pressed')
        },
        {
            text:'No',
            onPress: ()=>console.log('No Pressed')
        }
    ]
    )
};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button title="Simple " onPress={simpleAlertHanler} />
        <Button title="Alert with Two Options " onPress={twoOptionsHanler} />
        <Button title="Alert with three Options " onPress={threeOptionsHanler} />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0fff0',
    padding: 100,
  },
  text: {color: '#3f2949', marginTop: 10},
});
