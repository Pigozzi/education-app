import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import api from '../../services/api';
import global from '../../styles/global';

export default function TeacherCreate() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    async function handleSubmit() {

        if(password != confirmPassword) {
            alert('Password incorrent')
            return;
        }

        const data = {
            email,
            firstName,
            password,
        }

        try {
            await api.post('teachers', data);
            navigation.navigate('teacherLogin');
        } catch (err) {
            alert('Error to create a new teacher');
        }

    }

    return (
        <View style={global.container}>
            <ScrollView>
                <Text style={global.title}>Sign Up</Text>

                <View style={global.change}>
                    <RectButton style={global.buttonChange} onPress={() => navigation.navigate('studentCreate')}>
                        <Text style={global.buttonInputText}>STUDENT</Text>
                    </RectButton>
                    <RectButton style={global.buttonSelected} onPress={() => navigation.navigate('teacherCreate')}>
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

                <Text style={global.label}>FIRST NAME</Text>
                <TextInput
                    style={global.input}
                    value={firstName}
                    placeholder="Enter Your Name"
                    onChangeText={setFirstName}
                />

                <Text style={global.label}>PASSWORD</Text>
                <TextInput
                    style={global.input}
                    value={password}
                    placeholder="Enter Your Password"
                    onChangeText={setPassword}
                />

                <Text style={global.label}>CONFIRM PASSWORD</Text>
                <TextInput
                    style={global.input}
                    value={confirmPassword}
                    placeholder="Confirm Your Password"
                    onChangeText={setConfirmPassword}
                />

                <RectButton style={global.buttonSubmit} onPress={handleSubmit}>
                    <Text style={global.buttonTextSubmit}>Continue</Text>
                </RectButton>

                <View style={global.viewSignIn}>
                    <Text style={global.textSignIn}>
                        Have an Account?
                </Text>
                    <RectButton onPress={() => navigation.navigate('teacherLogin')}>
                        <Text style={global.textRed}> Sign In</Text>
                    </RectButton>
                </View>
            </ScrollView>
        </View>
    )
}