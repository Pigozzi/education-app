import React from 'react';
import { StyleSheet, View, Text, BackHandler } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
    const navigation = useNavigation();

    function handleExitApp() {
        BackHandler.exitApp();
    }
    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name='arrow-left' size={24} color='#ececec' />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            { showCancel ? (
                <BorderlessButton onPress={handleExitApp}>
                    <Feather name='x' size={24} color='#ececec' />
                </BorderlessButton>
            ) : (
                    <View />
                )
            }
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#E16080',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 40,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#f9f4fc',
        fontSize: 16,
        fontWeight: 'bold'
    }
})