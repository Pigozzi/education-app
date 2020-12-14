import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import global from '../../styles/global';
import api from '../../services/api';
import moment from 'moment';


interface Student {
    id: number;
    student_id: string;
    firstName: string;
    phone: string;
}

export default function TeacherPanel() {
    const [students, setStudents] = useState<Student[]>([]);

    const date = moment().format('MMMM D, YYYY');

    const navigation = useNavigation();

    useEffect(() => {
        api.get('students').then(response => {
            setStudents(response.data)
        })
    }, [])

    function openCall(phone: String) {
        Linking.openURL(`tel:${phone}`)
    }

    function handleTeacher() {
        navigation.navigate('teacherPanel');
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={global.label}>SEARCH A DATE</Text>
                <View style={styles.change}>
                    <TextInput style={styles.input} value={date} />
                    <RectButton style={styles.buttonChange} onPress={handleTeacher}>
                        <Feather name="arrow-right" size={16} color="#fff" />
                    </RectButton>
                </View>

                <Text style={global.label}>SEARCH BY NAME</Text>
                <View style={styles.change}>
                    <TextInput style={styles.input} value={'Ada Lovelace'} />
                    <RectButton style={styles.buttonChange} onPress={() => { }}>
                        <Feather name="arrow-right" size={16} color="#fff" />
                    </RectButton>
                </View>

                <Text style={styles.titleTwo}>{date}</Text>

                {students.map(student => {
                    return (
                        <View style={styles.student} key={student.id}>
                            <Text style={styles.studentProperty}>Student ID #</Text>
                            <Text style={styles.studentValue}>{student.student_id}</Text>

                            <Text style={styles.studentProperty}>Name</Text>
                            <Text style={styles.studentValue}>{student.firstName}</Text>

                            <Text style={styles.studentProperty}>Status</Text>
                            <Text style={styles.studentValue}>Present - Hi Teacher. I need help, please</Text>
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => {
                                    openCall(student.phone)
                                }}
                            >
                                <Text style={styles.detailsButtonText}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F9F4FC',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C91E6',
        paddingBottom: 20,
    },
    change: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        width: '75%',
        paddingVertical: 18,
        paddingHorizontal: 24,
        textAlignVertical: 'top',
    },
    buttonChange: {
        fontSize: 14,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '20%',
        backgroundColor: '#D8315B',
    },
    titleTwo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#D8315B',
        paddingBottom: 20,
        textAlign: 'center'
    },

    student: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
    },

    studentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },

    studentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 15,
        color: '#737380',
    },

    detailsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E16080',
        height: 40,
        borderRadius: 12,
},

    detailsButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }

})