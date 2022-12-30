import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

const Doc=({navigation})=>{
    return (
        <View>
    <Text>you wanna make an appointment???</Text>
    <Button title="Home" onPress={()=>navigation.navigate('Home')}></Button>
    </View>
    );
    
}

const styles= StyleSheet.create({})

export default Doc;