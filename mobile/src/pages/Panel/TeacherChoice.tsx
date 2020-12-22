import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import global from '../../styles/global';

export default function TeacherChoise() {

    const navigation = useNavigation();

    function handleNewAdministrator() {
        navigation.navigate('CreateSchool');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Awaiting verification.</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Do you is new administrator?</Text>
                <RectButton style={styles.buttonChange} onPress={handleNewAdministrator}>
                    <Text style={styles.buttonInputText}>Click here to create new School</Text>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F4FC',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
        paddingTop: 50,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 40,
    },
    buttonChange: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E16080',
    },
    buttonInputText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        margin: 10
    },
    box: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxText: {
        fontSize: 20,
        color: '#41414D',
        fontWeight: 'bold',
        textAlign: 'center'
    },

})