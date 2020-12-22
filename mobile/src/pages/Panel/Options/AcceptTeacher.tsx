import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../../services/api';

interface Teachers {
    id: number;
    fullName: string;
    email: string;
    verification: boolean;
}

export default function AcceptTeacher() {

    const [teachers, setTeachers] = useState<Teachers[]>([])

    useEffect(() => {
        api.get('verification').then(response => {
            setTeachers(response.data)
        })
    }, [teachers])

    async function handleAcceptTeacher(teacher: Object) {
        try {
            await api.put('verification', teacher)

            alert('Teacher accepted successfuly')

        } catch (err) {
            alert(err)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titleTwo}>ACCEPT NEW TEACHER</Text>
                {teachers.map(teacher => {
                    return (
                        <View style={styles.student} key={teacher.id}>
                            <Text style={styles.studentProperty}>Teacher name</Text>
                            <Text style={styles.studentValue}>{teacher.fullName}</Text>

                            <Text style={styles.studentProperty}>E-mail</Text>
                            <Text style={styles.studentValue}>{teacher.email}</Text>
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => {
                                    handleAcceptTeacher(teacher)
                                }}
                            >
                                <Text style={styles.detailsButtonText}>Accept</Text>
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