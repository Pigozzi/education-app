import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

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

        try {

            const response = await api.get(`schools/${school_id}`);

            const ifExist = response.data[0].school_id;

            console.log(ifExist);

            // if (ifExist.length <= 5) {
            //     alert('SCHOOL ID NOT FOUND');
            //     return;
            // }

            // await api.post('students', data);

            alert('Created Successfuly')

            // navigation.navigate('studentLogin');

        } catch (err) {
            alert('Error to create a new student')
        }
    }

    return (
        <View style={global.container}>
            <Text style={global.title}>Sign Up</Text>

            <View style={global.change}>
                <RectButton style={global.buttonSelected} onPress={() => navigation.navigate('studentCreate')}>
                    <Text style={global.buttonInputText}>STUDENT</Text>
                </RectButton>
                <RectButton style={global.buttonChange} onPress={() => navigation.navigate('teacherCreate')}>
                    <Text style={global.buttonInputText}>TEACHER</Text>
                </RectButton>
            </View>

            <Text style={global.label}>STUDENT ID #</Text>
            <TextInput
                style={global.input}
                value={student_id}
                placeholder="Enter Your ID Number"
                onChangeText={setStudentId}
            />

            <Text style={global.label}>SCHOOL ID #</Text>
            <TextInput
                style={global.input}
                value={school_id}
                placeholder="Enter Your ID School"
                onChangeText={setSchoolId}
            />

            <Text style={global.label}>FIRST NAME</Text>
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
                <Text style={global.buttonTextSubmit}>Continue</Text>
            </RectButton>

            <View style={global.viewSignIn}>
                <Text style={global.textSignIn}>
                    Have an Account?
                </Text>
                <RectButton onPress={() => navigation.navigate('studentLogin')}>
                    <Text style={global.textRed}> Sign In</Text>
                </RectButton>
            </View>
        </View>
    )
}