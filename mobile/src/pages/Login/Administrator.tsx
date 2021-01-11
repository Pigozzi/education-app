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

    async function handleLoginAdministrator() {

        const data = {
            email,
            password
        }

        try {
            const response = await api.post('sessionAdministrator', data);

            const administrator_id = response.data.id;
            const school_id = response.data.school_id;
            const fullName = response.data.fullName;

            await AsyncStorage.setItem('administrator_id', JSON.stringify(administrator_id));
            await AsyncStorage.setItem('school_id', JSON.stringify(school_id));
            await AsyncStorage.setItem('fullName', fullName);

            navigation.navigate('AdministratorPanel');

        } catch (err) {
            alert('Email or password invalid');
        }

    }

    return (
        <View style={global.container}>
            <Text style={global.title}>Hi, Administrator!</Text>
            <Text style={global.titleTwo}>Sign in to continue</Text>

            <Text style={global.label}>E-MAIL ADDRESS</Text>
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

            <RectButton style={global.buttonSubmit} onPress={handleLoginAdministrator}>
                <Text style={global.buttonTextSubmit}>Sign in</Text>
            </RectButton>

            <View style={global.viewSignIn}>
                <Text style={global.textSignIn}>
                    No have account?
                </Text>
                <RectButton onPress={() => navigation.navigate('AdministratorCreate')}>
                    <Text style={global.textRed}> Sign Up</Text>
                </RectButton>
            </View>
        </View>
    )
}