import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import global from '../styles/global';

interface Comment {
    id: number;
    comment: string;
    created_at: string;
    student_id: string;
}

export default function StudentPanel() {
    const [comments, setComments] = useState<Comment[]>([])
    const [firstName, setFirstName] = useState('')
    const [student_id, setStudentId] = useState('');

    const load = async () => {
        try {
            let name = await AsyncStorage.getItem("firstName")
            let id = await AsyncStorage.getItem("student_id")

            if (id !== null) { setStudentId(id) }
            if (name !== null) { setFirstName(name) }

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

    return (
        <View style={global.container}>

            <Text style={styles.title}>HELLO, {firstName.toUpperCase()}</Text>

            <View style={styles.directionCenter}>
                <Text style={styles.titleTwo}>MESSAGE HISTORY </Text>
            </View>

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
        color: '#3C91E6'
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