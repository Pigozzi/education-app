import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import global from '../../styles/global';

export default function SchoolCreate() {

    const [school_id, setSchoolId] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    function handleCreateSchool() {

    }

    return (
        <View style={global.container}>
            <Text style={styles.title}>CREATE NEW SCHOOL</Text>

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
                <Text style={global.buttonTextSubmit}>Continue</Text>
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