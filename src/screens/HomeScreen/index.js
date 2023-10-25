import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';


const HomeScreen = () => {
    return (
        <View style={styles.title}>
            <Text style={{fontSize:30, alignSelf:'center', color :'red'}}>Welcome to STUDENT COMMUNITY</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    title:{
        top: '50%',
        color: 'red',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen