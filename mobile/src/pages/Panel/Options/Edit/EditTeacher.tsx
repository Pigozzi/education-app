import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import api from '../../../../services/api';
import global from '../../../../styles/global';

export default function EditTeacher() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    return (
        <View style={global.container}>
            <ScrollView>
                <Text style={styles.title}>Edit teacher: "NAME"</Text>

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
                    value={fullName}
                    placeholder="Enter Your Name"
                    onChangeText={setFullName}
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

                <RectButton style={global.buttonSubmit} onPress={() => { }}>
                    <Text style={global.buttonTextSubmit}>Edit</Text>
                </RectButton>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#D8315B',
        paddingBottom: 20,
        textAlign: 'center'
    },
})