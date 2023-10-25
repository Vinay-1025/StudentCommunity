import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomInput from '../../components/custominput';
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [StudentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
    const onTermsOfUsePressed = () => {
        console.warn('Terms of use')
    }
    const onPrivacyPressed = () => {
        console.warn('Privacy policy')
    }

    return (
        <View style={styles.root} >
            <Text style={styles.title}>Create an account</Text>
            <View style={styles.cont} >
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="StudentID" value={StudentID} setValue={setStudentID} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />

            <CustomButton text="Register" onPress={onRegisterPressed} bgColor="#3B71F3" fgColor="white"/>
            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
            <SocialSignInButtons/>


            <View style={styles.inner}>

            <CustomButton text="Already have an account?, SIGNIN here." onPress={onSignInPress} fgColor="#66aa5c" />
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
        color: '#ddccaa',
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

export default SignUpScreen