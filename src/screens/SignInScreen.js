import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from '../../assets/images/dou.png';
import CustomInput from '../components/custominput';
import CustomButton from "../components/CustomButton/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.root} >
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.15 , borderRadius: 100 , width: height * 0.15, borderColor: '#f42233', borderWidth: 1}]}
                resizeMode="contain"
            />
            <View style={styles.cont} >
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true} />

            <CustomButton text="Sign In" onPress={onSignInPressed} bgColor="#3B71F3" fgColor="white"/>
            <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} fgColor="#fa5544" />


            <View style={styles.inner}>
            <SocialSignInButtons/>
            <CustomButton text="Don't have any account?, REGISTER here." onPress={onSignUpPress} fgColor="#66aa5c" />
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
});

export default SignInScreen