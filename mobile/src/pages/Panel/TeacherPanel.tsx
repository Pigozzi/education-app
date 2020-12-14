import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import global from '../../styles/global';

export default function TeacherPanel() {

    const navigation = useNavigation();

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
            <Text style={styles.title}>Panel</Text>
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