import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import moment from 'moment';
import global from '../../styles/global';

export default function StudentList() {

    const date = moment().format('MMMM D, YYYY');

    const navigation = useNavigation();

    return (
        <View style={global.container}>
            <ScrollView>

                <Text style={global.label}>SEARCH A DATE</Text>
                <View style={styles.change}>
                    <TextInput style={global.input} value={date} />
                    <RectButton style={styles.buttonChange} onPress={() => { }}>
                        <Feather name="arrow-right" size={16} color="#fff" />
                    </RectButton>
                </View>

                <Text style={global.label}>SEARCH BY NAME</Text>
                <View style={styles.change}>
                    <TextInput style={global.input} value={'Ada Lovelace'}/>
                    <RectButton style={styles.buttonChange} onPress={() => { }}>
                        <Feather name="arrow-right" size={16} color="#fff" />
                    </RectButton>
                </View>

                <Text style={styles.titleTwo}>{date}</Text>


                <View style={styles.student}>
                    <Text style={styles.studentProperty}>Student ID #</Text>
                    <Text style={styles.studentValue}>1578962</Text>

                    <Text style={styles.studentProperty}>Name</Text>
                    <Text style={styles.studentValue}>Ada Lovelace</Text>

                    <Text style={styles.studentProperty}>Status</Text>
                    <Text style={styles.studentValue}>Present - Hi Teacher, I need help, please</Text>
                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>Contact</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                <View style={styles.student}>
                    <Text style={styles.studentProperty}>Student ID #</Text>
                    <Text style={styles.studentValue}>1578962</Text>

                    <Text style={styles.studentProperty}>Name</Text>
                    <Text style={styles.studentValue}>Ada Lovelace</Text>

                    <Text style={styles.studentProperty}>Status</Text>
                    <Text style={styles.studentValue}>Present - Hi Teacher, I need help, please</Text>
                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>Contact</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                <View style={styles.student}>
                    <Text style={styles.studentProperty}>Student ID #</Text>
                    <Text style={styles.studentValue}>1578962</Text>

                    <Text style={styles.studentProperty}>Name</Text>
                    <Text style={styles.studentValue}>Ada Lovelace</Text>

                    <Text style={styles.studentProperty}>Status</Text>
                    <Text style={styles.studentValue}>Present - Hi Teacher, I need help, please</Text>
                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>Contact</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
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
        paddingBottom: 20,
    },
    change: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonChange: {
        fontSize: 14,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 70,
        margin: 5,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#D8315B',
    },
    titleTwo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#D8315B',
        paddingBottom: 20,
        textAlign: 'center'
    },

    student: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    studentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },

    studentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 15,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    }

})