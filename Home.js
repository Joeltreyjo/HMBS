import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

const Home =({navigation})=>{
    return (
    <View>
    <Text>hello from the home screen</Text>
    <Button title="Schedule" onPress={()=>navigation.navigate('Schedule')}></Button>
    </View>
    );
    
}

const styles= StyleSheet.create({

})

export default Home;