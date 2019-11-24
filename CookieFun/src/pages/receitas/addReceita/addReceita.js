import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Content, Form, Textarea, Text, Item, Input, Button, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/receitasActions';
import styles from './styles';
import { ImageBackground, Alert } from 'react-native';
import { showToast } from '../../../utils/utils';


const AddReceita = (props) => {
    const dispatch = useDispatch();
    const receitaId = props.navigation.state.params.receitaId;
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');

    const loading = useSelector(state => state.receitas.loading);
    const error = useSelector(state => state.receitas.error);
    const message = useSelector(state => state.receitas.message);

    useEffect(() => showMessageToast(), [message]);

    function showMessageToast() {
        if (error === false && message !== '' && loading === false) {
            return Alert.alert('Sucesso', 'Sua receita foi incluída');
        }
        else if (error === true && message !== '' && loading === false) {
            return Alert.alert('Ops!', 'Não foi possível incluir sua receita');
        }
    }

    function salvarReceita() {
        const receita = {
            descricao: descricao,
            titulo: title,
            autor: autor,
            tipoReceitaId: receitaId
        }


        dispatch(actions.inserirReceita(receita));
    }


    if (loading) {
        return (<Spinner color="blue" />)
    }

    return (
        <>
            <Container>
                <ImageBackground style={styles.image} source={require('../../../resources/backgroundFood.jpg')}>
                    <Content>
                        <Form>
                            <Item rounded style={styles.item}>
                                <Input style={styles.input}
                                    rounded
                                    placeholder="Titulo da Receita"
                                    placeholderTextColor="white"
                                    onChangeText={(e) => setTitle(e)}
                                />
                            </Item>
                            <Item rounded style={styles.item}>
                                <Input
                                    style={styles.input}
                                    rounded placeholder="Autor"
                                    placeholderTextColor="white"
                                    onChangeText={(e) => setAutor(e)}
                                />

                            </Item>
                            <Textarea
                                style={styles.textArea}
                                placeholder="Descrição"
                                onChangeText={(e) => setDescricao(e)}
                                placeholderTextColor="white" />
                        </Form>
                        <Button onPress={() => salvarReceita()} rounded style={styles.button}>
                            <Text>
                                Incluir
                            </Text>
                        </Button>
                    </Content>
                </ImageBackground>
            </Container>
        </>
    );
}

export default AddReceita;
