import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import global from '../../styles/global';

export default function SchoolCreate() {
    const [school_id, setSchoolId] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [administrator_id, setAdministratorId] = useState('');

    const navigation = useNavigation();

    const load = async () => {
        try {
            let administrator_id = await AsyncStorage.getItem("administrator_id")

            console.log(administrator_id)

            if (administrator_id !== null) { setAdministratorId(administrator_id) }

        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        load();
    }, [])

    async function handleCreateSchool() {
        const data = {
            school_id,
            fullName,
            phone,
        }

        try {
            await api.post('schools', data, {
                headers: {
                    Authorization: administrator_id
                }
            });

            alert('School created Successfuly')

            navigation.navigate('AdministratorPanel');
        } catch (err) {
            alert(err)
        }
    }

    return (
        <View style={global.container}>
            <Text style={styles.title}>REGISTER NEW SCHOOL</Text>

            <Text style={global.label}>SCHOOL ID #</Text>
            <TextInput
                style={global.input}
                value={school_id}
                placeholder="Enter Your ID School"
                onChangeText={setSchoolId}
            />

            <Text style={global.label}>FULL SCHOOL NAME</Text>
            <TextInput
                style={global.input}
                value={fullName}
                placeholder="Enter Your Name"
                onChangeText={setFullName}
            />

            <Text style={global.label}>PHONE NUMBER</Text>
            <TextInput
                style={global.input}
                value={phone}
                placeholder="Enter Your Phone Number"
                onChangeText={setPhone}
            />

            <RectButton style={global.buttonSubmit} onPress={handleCreateSchool}>
                <Text style={global.buttonTextSubmit}>Register</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#D8315B',
        marginBottom: 30,
        textAlign: 'center'
    },
})