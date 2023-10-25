import { set } from 'lodash';
import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height: 30,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    input:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default CustomInput;