import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import api from '../../services/api';
import global from '../../styles/global';

export default function Administrator() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [passwordVerification, setPasswordVerification] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    async function handleSubmit() {

        if (passwordVerification != confirmPassword) {
            alert('Password incorrent')
            return;
        }

        const data = {
            email,
            fullName,
            passwordVerification,
            confirmPassword
        }

        try {
            await api.post('administrator', data);

            alert('Administrator created Successfuly')

            navigation.navigate('AdministratorLogin');
        } catch (err) {
            alert('Error to create a new teacher');
        }
    }

    return (
        <View style={global.container}>
            <ScrollView>
                <Text style={global.register}>Register</Text>

                <Text style={global.label}>E-MAIL ADDRESS</Text>
                <TextInput
                    style={global.input}
                    value={email}
                    placeholder="Enter Your E-mail Address"
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />

                <Text style={global.label}>FULL NAME</Text>
                <TextInput
                    style={global.input}
                    value={fullName}
                    placeholder="Enter Your Full Name"
                    onChangeText={setFullName}
                />

                <Text style={global.label}>PASSWORD</Text>
                <TextInput
                    style={global.input}
                    value={passwordVerification}
                    placeholder="Enter Your Password"
                    onChangeText={setPasswordVerification}
                    secureTextEntry={true}
                />

                <Text style={global.label}>CONFIRM PASSWORD</Text>
                <TextInput
                    style={global.input}
                    value={confirmPassword}
                    placeholder="Confirm Your Password"
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />

                <RectButton style={global.buttonSubmit} onPress={handleSubmit}>
                    <Text style={global.buttonTextSubmit}>Register</Text>
                </RectButton>

                <View style={global.viewSignIn}>
                    <Text style={global.textSignIn}>
                        Have an account?
                </Text>
                    <RectButton onPress={() => navigation.navigate('AdministratorLogin')}>
                        <Text style={global.textRed}> Sign In</Text>
                    </RectButton>
                </View>
            </ScrollView>
        </View>
    )
}