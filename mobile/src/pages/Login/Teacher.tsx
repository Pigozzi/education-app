import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import api from '../../services/api';
import global from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StudentDetails() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    async function handleTeacherLogin() {

        const data = {
            email,
            password
        }

        try {
            const response = await api.post('sessionTeacher', data);

            const teacher_id = response.data.id;
            const school_id = response.data.school_id;

            await AsyncStorage.setItem('teacher_id', JSON.stringify(teacher_id));
            await AsyncStorage.setItem('school_id', JSON.stringify(school_id));

            const verification = response.data.verification;

            if (Boolean(verification) === true) {
                navigation.navigate('teacherPanel');
            } else {
                navigation.navigate('TeacherChoice')
            }

        } catch (err) {
            alert('Email or password invalid');
        }

    }

    return (
        <View style={global.container}>
            <Text style={global.title}>Hi, Teacher!</Text>
            <Text style={global.titleTwo}>Sign in to continue</Text>

            {/* <View style={global.change}>
                <RectButton style={global.buttonChange} onPress={() => navigation.navigate('studentLogin')}>
                    <Text style={global.buttonInputText}>STUDENT</Text>
                </RectButton>
                <RectButton style={global.buttonSelected} onPress={() => navigation.navigate('teacherLogin')}>
                    <Text style={global.buttonInputText}>TEACHER</Text>
                </RectButton>
            </View> */}

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
                secureTextEntry={true}
            />

            <RectButton style={global.buttonSubmit} onPress={handleTeacherLogin}>
                <Text style={global.buttonTextSubmit}>Sign in</Text>
            </RectButton>

            <View style={global.viewSignIn}>
                <Text style={global.textSignIn}>
                    No have account?
                </Text>
                <RectButton onPress={() => navigation.navigate('teacherCreate')}>
                    <Text style={global.textRed}> Sign Up</Text>
                </RectButton>
            </View>
        </View>
    )
}