import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import global from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

interface Comment {
    id: number;
    comment: string;
    created_at: string;
    student_id: string;
}

export default function StudentPanel() {
    const [comments, setComments] = useState<Comment[]>([])
    const [fullName, setFullName] = useState('')
    const [student_id, setStudentId] = useState('');

    const navigation = useNavigation();

    const load = async () => {
        try {
            let name = await AsyncStorage.getItem("fullName")
            let id = await AsyncStorage.getItem("student_id")

            if (id !== null) { setStudentId(id) }
            if (name !== null) { setFullName(name) }

        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        load();

        api.get('profile', {
            headers: {
                Authorization: student_id,
            }
        }).then(response => {
            setComments(response.data)
        })
    }, [student_id])

    function exitApp() {
        BackHandler.exitApp();
    }

    async function handleStudentForm() {

        try {
            const response = await api.post('sessions', { student_id })

            await AsyncStorage.setItem('student_id', student_id);
            await AsyncStorage.setItem('fullName', response.data.fullName);

            navigation.navigate('studentForm');
        } catch (err) {
            alert(err)
        }
    }

    return (
        <View style={global.container}>

            <Text style={styles.title}>HELLO, {fullName.toUpperCase()}</Text>

            <RectButton style={global.buttonChange} onPress={handleStudentForm}>
                <Text style={global.buttonInputText}>Form</Text>
            </RectButton>

            <View style={styles.header}>
                <Text style={styles.headerText}>DATE</Text>
                <Text style={styles.headerText}>STATUS</Text>
            </View>

            <ScrollView style={{ height: 350 }}>
                {comments.map(comment => {
                    return (
                        <View style={styles.listWrapper} key={comment.id}>
                            <Text style={styles.row}>{comment.created_at}</Text>
                            <Text style={styles.row}>Completed</Text>
                        </View>
                    )
                })}
            </ScrollView>

            <RectButton style={styles.buttonSubmit} onPress={exitApp}>
                <Text style={global.buttonTextSubmit}>EXIT</Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C91E6',
        paddingBottom: 20,
    },
    titleTwo: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 20,
        paddingTop: 20,
    },
    directionCenter: {
        alignItems: 'center',
    },
    header: {
        height: 50,
        backgroundColor: '#D8315B',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRightWidth: 1,
    },
    row: {
        flex: 1,
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
    },
    buttonSubmit: {
        fontSize: 16,
        backgroundColor: '#D8315B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 20,
    },
})