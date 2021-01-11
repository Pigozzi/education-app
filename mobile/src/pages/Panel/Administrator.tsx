import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import global from '../../styles/global';

export default function AdministratorPanel() {
    const [administrator_id, setadministratorId] = useState('');
    const [fullName, setFullName] = useState('');

    const navigation = useNavigation();

    const load = async () => {
        try {
            let id = await AsyncStorage.getItem("administrator_id")
            let name = await AsyncStorage.getItem("fullName")

            if (id !== null) { setadministratorId(id) }
            if (name !== null) { setFullName(name) }

        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        load();

        api.get('profileAdmin', {
            headers: {
                Authorization: administrator_id
            }
        })

    }, [administrator_id])


    function handleMessages() {
        navigation.navigate('studentInteractions');
    }

    function handleAcceptTeacher() {
        navigation.navigate('acceptTeacher')
    }

    function handleStudentList() {
        navigation.navigate('studentList')
    }

    function handleTeacherList() {
        navigation.navigate('teacherList')
    }

    return (
        <View style={global.container}>
            <Text style={styles.title}>Welcome, {fullName.toUpperCase()}!</Text>
            <RectButton style={styles.buttonChange} onPress={handleMessages}>
                <Text style={styles.buttonInputText}>STUDENT INTERACTIONS</Text>
            </RectButton>
            <RectButton style={styles.buttonChange} onPress={handleAcceptTeacher}>
                <Text style={styles.buttonInputText}>ACCEPT NEW TEACHER</Text>
            </RectButton>
            <RectButton style={styles.buttonChange} onPress={handleStudentList}>
                <Text style={styles.buttonInputText}>STUDENT LIST</Text>
            </RectButton>
            <RectButton style={styles.buttonChange} onPress={handleTeacherList}>
                <Text style={styles.buttonInputText}>TEACHER LIST</Text>
            </RectButton>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonChange: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E16080',
    },
    buttonInputText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})