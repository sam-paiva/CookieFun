import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        margin: 15
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
        marginTop: 50,
        fontSize: 15,
        backgroundColor: 'orange',
        margin: 30
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