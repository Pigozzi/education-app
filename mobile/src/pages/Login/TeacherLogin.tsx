import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import api from '../../services/api';
import global from '../../styles/global';

export default function StudentDetails() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    async function handleTeacherLogin() {

        // const data = {
        //     email,
        //     password
        // }

        // try {
        //     await api.post('teacher', data);
        //     navigation.navigate('teacherPanel');
        // } catch (err) {
        //     alert('Email or password invalid');
        // }

    }

    return (
        <View style={global.container}>
            <Text style={global.title}>Sign In</Text>

            <View style={global.change}>
                <RectButton style={global.buttonChange} onPress={() => navigation.navigate('studentLogin')}>
                    <Text style={global.buttonInputText}>STUDENT</Text>
                </RectButton>
                <RectButton style={global.buttonSelected} onPress={() => navigation.navigate('teacherLogin')}>
                    <Text style={global.buttonInputText}>TEACHER</Text>
                </RectButton>
            </View>

            <Text style={global.label}>TEACHER E-MAIL ADDRESS</Text>
            <TextInput
                style={global.input}
                value={email}
                placeholder="Enter Your E-mail Address"
                onChangeText={setEmail}
            />

            <Text style={global.label}>PASSWORD</Text>
            <TextInput
                style={global.input}
                value={password}
                placeholder="Enter Your Password"
                onChangeText={setPassword}
            />

            <RectButton style={global.buttonSubmit} onPress={handleTeacherLogin}>
                <Text style={global.buttonTextSubmit}>Continue</Text>
            </RectButton>

            <View style={global.viewSignIn}>
                <Text style={global.textSignIn}>
                    No Have Account?
                </Text>
                <RectButton onPress={() => navigation.navigate('teacherCreate')}>
                    <Text style={global.textRed}> Sign Up</Text>
                </RectButton>
            </View>
        </View>
    )
}