import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';
import global from '../../styles/global';

export default function StudentDetails() {
    const [student_id, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [school_id, setSchoolId] = useState('');

    const navigation = useNavigation();

    async function handleCreateStudent() {

        const data = {
            student_id,
            fullName,
            phone,
            school_id
        }

        const response = await api.get(`schools/${school_id}`);

        const exists = response.data.school_id;

        if (!exists) {
            alert('SCHOOL ID NOT FOUND');
            return;
        }

        try {
            await api.post('students', data);

            alert('Created Successfuly')

            navigation.navigate('studentLogin');

        } catch (err) {
            alert('Error to create a new student')
        }
    }

    return (
        <View style={global.container}>
            <ScrollView>
                <Text style={global.register}>Register</Text>

                {/* <View style={global.change}>
                    <RectButton style={global.buttonSelected} onPress={() => navigation.navigate('studentCreate')}>
                        <Text style={global.buttonInputText}>STUDENT</Text>
                    </RectButton>
                    <RectButton style={global.buttonChange} onPress={() => navigation.navigate('teacherCreate')}>
                        <Text style={global.buttonInputText}>TEACHER</Text>
                    </RectButton>
                </View> */}

                <Text style={global.label}>SCHOOL ID #</Text>
                <TextInput
                    style={global.input}
                    value={school_id}
                    placeholder="Enter Your ID School"
                    onChangeText={setSchoolId}
                />

                <Text style={global.label}>STUDENT ID #</Text>
                <TextInput
                    style={global.input}
                    value={student_id}
                    placeholder="Enter Your ID Number"
                    onChangeText={setStudentId}
                />

                <Text style={global.label}>FULL NAME</Text>
                <TextInput
                    style={global.input}
                    value={fullName}
                    placeholder="Enter Your Name"
                    onChangeText={setFullName}
                />

                <Text style={global.label}>PHONE NUMBER</Text>
                <TextInput
                    style={global.input}
                    value={phone}
                    placeholder="Enter Your Phone Number"
                    onChangeText={setPhone}
                />

                <RectButton style={global.buttonSubmit} onPress={handleCreateStudent}>
                    <Text style={global.buttonTextSubmit}>Register</Text>
                </RectButton>

                <View style={global.viewSignIn}>
                    <Text style={global.textSignIn}>
                        Have an account?
                </Text>
                    <RectButton onPress={() => navigation.navigate('studentLogin')}>
                        <Text style={global.textRed}> Sign In</Text>
                    </RectButton>
                </View>
            </ScrollView>
        </View>
    )
}