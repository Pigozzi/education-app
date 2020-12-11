import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F9F4FC',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#000',
    },
    change: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonChange: {
        fontSize: 14,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        margin: 5,
        marginTop: 10,
        marginBottom: 40,
        backgroundColor: '#E16080',
    },
    buttonSelected: {
        fontSize: 14,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        margin: 5,
        marginTop: 10,
        marginBottom: 40,
        backgroundColor: '#D8315B',
    },
    buttonInputText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
    },
    label: {
        color: '#D8315B',
        marginBottom: 8,
        fontWeight: "700",
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
    buttonSubmit: {
        fontSize: 16,
        backgroundColor: '#D8315B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 20,
    },
    buttonTextSubmit: {
        fontSize: 16,
        color: '#FFF',
    },
    viewSignIn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    textSignIn: {
        fontSize: 16,
        color: '#8D99AE',
    },
    textRed: {
        color: '#D8315B',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default global;