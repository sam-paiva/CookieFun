import React, { useEffect } from 'react';
import { Container, Content, Header, Card, Body, CardItem, Button, Title, Text, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../actions/receitasActions';
import styles from './styles';
import { ImageBackground } from 'react-native';


const Receitas = (props) => {
    const dispatch = useDispatch();
    const receitaId = props.navigation.state.params.receitaId;
    const receitas = useSelector(state => state.receitas.receitas);

    useEffect(() => {
        dispatch(actions.getReceitas(receitaId));
    }, [receitas]);

    return (
        <>
            <Container>
                <ImageBackground style={styles.image} source={require('../../../resources/backgroundFood.jpg')}>
                    <Content>
                        <Button style={styles.button} onPress={() => props.navigation.navigate('AddReceita', { receitaId: receitaId })} rounded primary>
                            <Icon style={styles.icon} size={30} name='add' />
                        </Button>
                        {receitas.map((element, key) => {
                            return <Card style={styles.card} >
                                <CardItem key={key} header>
                                    <Text>{element.titulo}</Text>
                                </CardItem>
                                <CardItem header>
                                    <Text>{element.nomeReceita}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {element.descricao}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Text>Por: Samuel Paiva</Text>
                                </CardItem>
                            </Card>
                        })}

                    </Content>
                </ImageBackground>
            </Container>
        </>
    );
}

export default Receitas;
