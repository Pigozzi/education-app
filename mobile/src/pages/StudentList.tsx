import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import global from '../styles/global';

export default function StudentList() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={global.container}>
            <Text style={styles.title}>Student Interaction Data</Text>

            <View style={styles.selectDate}>
                <Button onPress={showDatepicker} title="Click to Select a Date" />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={() => { }}
                    />
                )}
            </View>

            <Text style={styles.titleTwo}>Student Interactions</Text>

            <View style={styles.header}>
                <Text style={styles.headerText}>Nome</Text>
                <Text style={styles.headerText}>Student ID</Text>
                <Text style={styles.headerText}>Phone</Text>
            </View>
            <ScrollView style={{ height: 240 }}>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>15785892</Text>
                    <Text style={styles.row}>C</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>15785892</Text>
                    <Text style={styles.row}>C</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>15785892</Text>
                    <Text style={styles.row}>C</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>15785892</Text>
                    <Text style={styles.row}>C</Text>
                </View>
            </ScrollView>
            <Text style={styles.label}>Or search by name...</Text>
            <TextInput style={styles.input}></TextInput>

            <View style={styles.header}>
                <Text style={styles.headerText}>Results</Text>
            </View>
            <ScrollView style={{ height: 240 }}>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>December, 10</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>December, 10</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>December, 10</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>Ada Lovelace</Text>
                    <Text style={styles.row}>December, 10</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C91E6',
    },
    selectDate: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleTwo: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    header: {
        height: 50,
        backgroundColor: '#D8315B',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRightWidth: 1,
    },
    row: {
        flex: 1,
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },
    label: {
        color: '#000',
        textAlign: 'center',
        fontWeight: "700",
        paddingTop: 10,
        paddingBottom: 10,
    },
})