import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        margin: 15
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
        fontSize: 20,
        color: 'white',
    },
    button: {
        color: 'white',
        marginTop: 20,
        fontSize: 15,
        width: 50,
        backgroundColor: 'orange',
        margin: 30,
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
        marginTop: 30
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.8
    }
})

export default styles;