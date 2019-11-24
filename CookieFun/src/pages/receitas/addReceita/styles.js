import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textArea: {
        width: '95%',
        backgroundColor: 'black',
        marginTop: 20,
        marginLeft: 10,
        height: 250,
        fontSize: 15,
        color: 'white'
    },
    icon: {
        textAlign: 'center',
    },
    card: {
        opacity: 0.9
    },
    form: {
        marginTop: 100
    },
    input: {
        fontSize: 15,
        color: 'white',
        backgroundColor: 'black',
    },
    button: {
        color: 'white',
        margin: 30,
        fontSize: 15,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        margin: 20
    },
    header: {
        backgroundColor: 'black'
    },
    item: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.9
    }
})

export default styles;