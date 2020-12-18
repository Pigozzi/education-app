import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import global from '../../styles/global';
import api from '../../services/api';
import moment from 'moment';


interface Comment {
    id: number;
    student_id: string;
    firstName: string;
    phone: string;
    comment: string;
    created_at: Date;
}

export default function TeacherPanel() {
    const [students, setStudents] = useState<Comment[]>([]);
    const [search, setSearch] = useState('');
    const [created_at, setCreatedAt] = useState(moment().format('MMMM D, YYYY'));

    useEffect(() => {
        api.get('comments').then(response => {
            setStudents(response.data)
        })
    }, [])

    function openCall(phone: String) {
        Linking.openURL(`tel:${phone}`)
    }

    const filterStudent = students.filter((item) => {
        return item.firstName.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    })

    async function searchDate() {
        try {
            await api.get(`/search/${created_at}`).then(response => {
                setStudents(response.data);
            });
        } catch (err) {
            alert(err);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={global.label}>SEARCH A DATE</Text>
                <View style={styles.change}>
                    <TextInput style={styles.input} onChangeText={setCreatedAt} value={created_at} />
                    <RectButton style={styles.buttonChange} onPress={searchDate}>
                        <Feather name="arrow-right" size={16} color="#fff" />
                    </RectButton>
                </View>

                <Text style={global.label}>SEARCH BY NAME</Text>
                <TextInput style={global.input} onChangeText={setSearch} />

                <Text style={styles.titleTwo}>{created_at}</Text>

                {filterStudent.map(student => {
                    return (
                        <View style={styles.student} key={student.id}>
                            <Text style={styles.studentProperty}>Student ID #</Text>
                            <Text style={styles.studentValue}>{student.student_id}</Text>

                            <Text style={styles.studentProperty}>Name</Text>
                            <Text style={styles.studentValue}>{student.firstName}</Text>

                            <Text style={styles.studentProperty}>Comment</Text>
                            <Text style={styles.studentValue}>{student.comment}</Text>
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
        textAlign: 'center',
        paddingTop: 10,
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