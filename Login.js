import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

const Login=({navigation})=>{
    return (
        <View>
    <Text>whats your name ..this is the login screen</Text>
    <Button title="sign in " onPress={()=>navigation.navigate('Home')}></Button>
    </View>
    );
    
}

const styles= StyleSheet.create({})

export default Login;