import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const showData = () =>{
        alert("hello world")
    }
    return (
        <View>
            <Text>Hello React-Native</Text>
            <Text>สวัสดี React-Native</Text>
            <Button title='Click' onPress={showData}/>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})
