import React from 'react';
import { Container, Content, Header, Left, Title, Text, View } from 'native-base';
import { Button, Icon } from 'react-native-elements';
import styles from '../home/styles';


const Home = (props) => {
    return (
        <>
            <Container style={styles.container}>
                <Content>
                    <View>
                        <Text style={styles.title}>Bem vindo ao CookieFun</Text>
                    </View>
                </Content>
            </Container>
        </>
    );
}

Home.navigationOptions = {
    title: 'Home',
}

export default Home;
