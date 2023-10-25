import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('facebook')
    }
    const onSignInGoogle = () => {
        console.warn('google')
    }
    const onSignInApple = () => {
        console.warn('Apple')
    }
    return (
        <View style={styles.box}>
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636"/>
        </View>
    )
}

const styles = StyleSheet.create ({
    box:{
        paddingTop: '20%',
        width:'100%',
    },
});

export default SocialSignInButtons