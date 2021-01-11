import React from 'react';
import { View, Text, Image, StyleSheet, _ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import global from '../styles/global';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToStudent() {
        navigate('studentLogin');
    }

    function handleNavigateToTeacher() {
        navigate('teacherLogin');
    }

    function handleNavigateToAdministrator() {
        navigate('AdministratorLogin');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require('../images/landing.png')} style={styles.banner} />

                <Text style={styles.title}>
                    Welcome! {'\n'}
                    <Text style={global.titleTwo}>Choose how to access.</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleNavigateToStudent}
                        style={[styles.button, styles.buttonPrimary]}
                    >
                        <Feather name='arrow-left' size={24} color='#000' />

                        <Text style={styles.buttonText}>Student</Text>
                    </RectButton>

                    <RectButton
                        onPress={handleNavigateToTeacher}
                        style={[styles.button, styles.buttonSecondary]}
                    >
                        <Feather name='arrow-left' size={24} color='#000' />
                        <Text style={styles.buttonText}>Teacher</Text>
                    </RectButton>
                </View>
                <RectButton style={global.buttonSubmit} onPress={handleNavigateToAdministrator}>
                    <Text style={global.buttonTextSubmit}>Administrator</Text>
                </RectButton>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F4FC',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        color: '#000',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 50,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#D8315B'
    },

    buttonPrimary: {
        backgroundColor: '#FFF',
    },

    buttonSecondary: {
        backgroundColor: '#FFF'
    },

    buttonText: {
        color: '#D8315B',
        fontSize: 20,
        fontWeight: 'bold'
    },

})

export default Landing;