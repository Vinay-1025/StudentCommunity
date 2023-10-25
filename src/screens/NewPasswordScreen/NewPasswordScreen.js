import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomInput from '../../components/custominput';
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/core";

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };

    const onResendPressed = () => {
        console.warn('Resend code');
    };
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };


    return (
        <View style={styles.root} >
            <Text style={styles.title}>Reset Your Password</Text>
            <View style={styles.cont} >
            <CustomInput placeholder="Code" value={code} setValue={setCode} />
            <CustomButton placeholder="Enter Your New password" value={NewPassword} setValue={setNewPassword} />

            <CustomButton text="Submit" onPress={onSubmitPressed} bgColor="#3B71F3" fgColor="white"/>
            <View style={styles.inner}>

            <CustomButton text="Back to Sign In" onPress={onSignInPress} fgColor="#66aa5c" />
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        top: '10%',
        paddingTop: 60,
        padding: 30,
        borderRadius: '100%',
    },
    cont:
    {
        paddingTop: 50,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    inner:{
        paddingTop: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#225577',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    }
});

export default NewPasswordScreen