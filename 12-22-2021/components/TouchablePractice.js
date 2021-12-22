import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native'

const TouchablePractice = () => {
    const [inputValue1, setInputEmail] = useState('');
    const [inputValue2, setInputPassword] = useState('');
    const onPressAlert = () => {
        if (!inputValue1.trim()) {
          alert('Please Enter Email');
          return;
        } else if (!inputValue2.trim()) {
          alert('Please Enter Password');
          return;
        } else {
          alert("Email: " + inputValue1 + "\n" + "Password: " + inputValue2);
          return;
        }
      };
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "Email"
                    onChangeText={inputValue1 => {
                        setInputEmail(inputValue1);
                      }}
                />
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "Password"
                    onChangeText={inputValue2 => {
                        setInputPassword(inputValue2);
                      }}
                />
            </View>
            <TouchableOpacity 
                style={styles.buttonFacebookStyle}
                activeOpacity = {0.5}
                onPress={onPressAlert}
            >
              <Text style = {styles.buttonTextStyle}> SUBMIT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default TouchablePractice

const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 35,
      },
      textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 20,
        borderColor: "#FF8524"
      },
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
      },
      buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF8524',
        borderWidth: 1,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        marginTop: 15,
      },
})
