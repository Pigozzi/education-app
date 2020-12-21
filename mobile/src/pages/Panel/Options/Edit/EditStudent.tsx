import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import api from '../../../../services/api';
import global from '../../../../styles/global';

interface StudentDetailsRouteParams {
    id: number;
}

interface Student {
    student_id: string;
    firstName: string;
    phone: string;
}

export default function EditStudent() {
    const [student_id, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const [student, setStudent] = useState<Student[]>([]);

    const params = route.params as StudentDetailsRouteParams;

    useEffect(() => {
        api.get(`students/${params.id}`).then(response => {
            setStudent(response.data)
        })
    }, [params.id])

    async function edit() {

        const id = params.id;

        const data = {
            student_id,
            firstName,
            phone
        }

        try {
            await api.put(`/students/${id}`, data);
            alert('Successfuly');

            navigation.navigate('studentList');

        } catch (err) {
            alert(err);
        }
    }

    return (
        <View style={global.container}>
            {student.map(student => {
                return (
                    <View key={params.id}>
                        <Text style={styles.title}>Edit student: {student.firstName}</Text>

                        <Text style={global.label}>STUDENT ID #</Text>
                        <TextInput
                            style={global.input}
                            value={student_id}
                            placeholder={student.student_id}
                            onChangeText={setStudentId}
                        />

                        <Text style={global.label}>FIRST NAME</Text>
                        <TextInput
                            style={global.input}
                            value={firstName}
                            placeholder={student.firstName}
                            onChangeText={setFirstName}
                        />

                        <Text style={global.label}>PHONE NUMBER</Text>
                        <TextInput
                            style={global.input}
                            value={phone}
                            placeholder={student.phone}
                            onChangeText={setPhone}
                        />

                        <RectButton style={global.buttonSubmit} onPress={edit}>
                            <Text style={global.buttonTextSubmit}>Edit</Text>
                        </RectButton>
                    </View>
                )
            })}
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