import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import global from '../../styles/global';

export default function TeacherChoice() {

    return (
        <View style={global.container}>
            <Text style={styles.title}>Awaiting verification.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 40,
    }
})