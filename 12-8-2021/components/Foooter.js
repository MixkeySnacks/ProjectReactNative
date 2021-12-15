import React , {useState,useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Foooter = () => {
    const users = [
        {id:1, name:'John'},
        {id:2, name:'Mary'}
    ]

    const [count,setCount] = useState(0)

    //update alway if re-render
    useEffect (() => {
        console.log("use effect1")
    })
    useEffect (() => {
        console.log("use effect2")
    },[])


    return (
        <View>
            <Text style = {styles.title}> Count {count}
            </Text>
                {
                    users.map((user,index)=>{
                        return <Text key={user.id}>{index+1}. {user.name}</Text>
                    })
                }

            
            <Button title='Click Me' onPress={()=>{
                setCount(count+1)
            }}/>
        </View>
    )
}

export default Foooter

const styles = StyleSheet.create({
    title:{
        fontSize:20
    }
})
