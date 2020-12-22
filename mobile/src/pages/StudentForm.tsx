import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import moment from 'moment';
import api from '../services/api';
import global from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StudentForm() {

    const [fullName, setFullName] = useState('')
    const [student_id, setStudentId] = useState('');

    const presence = true;
    const [comment, setComment] = useState('');

    const date = moment().format('MMMM D, YYYY');
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
    }, [])

    async function handleSubmitLearning() {

        try {
            await api.post('comments', presence, {
                headers: {
                    Authorization: student_id
                }
            });
            navigation.navigate('studentMessage')

        } catch (err) {
            alert('Error to send message');
        }
    }

    async function handleSubmitHelp() {

        const data = {
            presence,
            comment
        }

        try {
            await api.post('comments', data, {
                headers: {
                    Authorization: student_id
                }
            });
            navigation.navigate('studentMessage');
        } catch (err) {
            alert('Error to send message');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Good Morning,</Text>
            <Text style={styles.title}>{fullName.toUpperCase()}</Text>
            <View style={styles.directionRight}>
                <Text style={styles.titleDate}>{date}</Text>
            </View>

            <Text style={styles.titleTwo}>Please Click Below to Submit Your Attendance for Today!</Text>

            <RectButton style={styles.buttonLearning} onPress={handleSubmitLearning}>
                <Text style={global.buttonTextSubmit}>Yes, I am engaged in learning today!!</Text>
            </RectButton>

            <Text style={styles.titleThree}>Need Help?</Text>

            <TextInput
                style={[global.input, { height: 110 }]}
                value={comment}
                onChangeText={setComment}
                multiline
                placeholder="Please tell me how I can help you!"
            />

            <RectButton style={styles.buttonSubmit} onPress={handleSubmitHelp}>
                <Text style={global.buttonTextSubmit}>Submit</Text>
            </RectButton>
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
        color: '#3C91E6'
    },
    directionRight: {
        alignItems: 'flex-end',
    },
    titleDate: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 30,
    },
    titleTwo: {
        fontSize: 24,
        paddingBottom: 30,
    },
    titleThree: {
        fontSize: 24,
        color: '#D8315B',
        paddingTop: 30,
        paddingBottom: 20,
    },
    buttonLearning: {
        backgroundColor: '#82AEB1',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    buttonSubmit: {
        fontSize: 16,
        backgroundColor: '#3C91E6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 10,
    },
})