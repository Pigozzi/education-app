import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../../services/api';
import global from '../../../styles/global';

interface Students {
    id: number;
    student_id: number;
    fullName: string;
    phone: string;
}

export default function StudentList() {
    const [students, setStudents] = useState<Students[]>([])
    const [search, setSearch] = useState('');

    const navigation = useNavigation();

    function navigateToDetail(id: number) {
        navigation.navigate('editStudent', { id });
    }

    function openCall(phone: String) {
        Linking.openURL(`tel:${phone}`)
    }

    const filterStudent = students.filter((item) => {
        return item.fullName.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    })

    useEffect(() => {
        api.get('students').then(response => {
            setStudents(response.data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={global.label}>SEARCH BY NAME</Text>
                <TextInput style={global.input} onChangeText={setSearch} />

                {filterStudent.map(student => {
                    return (
                        <View style={styles.student} key={student.id}>
                            <Text style={styles.studentProperty}>Student ID #</Text>
                            <Text style={styles.studentValue}>{student.student_id}</Text>

                            <Text style={styles.studentProperty}>Name</Text>
                            <Text style={styles.studentValue}>{student.fullName}</Text>

                            <Text style={styles.studentProperty}>Phone</Text>
                            <TouchableOpacity
                                style={styles.detailsContact}
                                onPress={() => {
                                    openCall(student.phone)
                                }}
                            >
                                <Text style={styles.detailsContactText}>{student.phone}</Text>
                                <Text style={styles.detailsContactText}>Click to call</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => navigateToDetail(student.id)}
                            >
                                <Text style={styles.detailsButtonText}>Edit</Text>
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
    },

    detailsContact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsContactText: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 15,
        color: '#3C91E6',
        textDecorationLine: 'underline'
    }

})