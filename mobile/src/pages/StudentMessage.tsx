import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import moment from 'moment';
import global from '../styles/global';

export default function StudentMessage() {

    const date = moment().format('MMMM Do YYYY');

    function exitApp() {
        BackHandler.exitApp();
    }

    return (
        <View style={global.container}>
            <Text style={styles.title}>THANK YOU...</Text>
            <View style={styles.directionRight}>
                <Text style={styles.titleDate}>{date}</Text>
            </View>
            <Text style={styles.titleTwo}>Your Attedance Has Been Logged for Today</Text>

            <View style={styles.directionCenter}>
                <Text style={styles.titleThree}>See Your Tomorrow!</Text>
            </View>
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
    directionRight: {
        alignItems: 'flex-end',
    },
    directionCenter: {
        alignItems: 'center',
    },
    titleDate: {
        fontSize: 16,
        paddingBottom: 30,
    },
    titleTwo: {
        fontSize: 24,
        paddingBottom: 30,
    },
    titleThree: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C91E6',
        paddingTop: 30,
        paddingBottom: 30,
    },
    buttonSubmit: {
        fontSize: 16,
        backgroundColor: '#D8315B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 10,
    },
})