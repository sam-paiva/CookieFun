import React, { useEffect } from 'react';
import { Container, Content, Header, Card, Body, CardItem, Title, Text } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/receitasActions';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';


const TipoReceitas = (props) => {
    const dispatch = useDispatch();

    const tipoReceitas = useSelector(state => state.receitas.tipoReceitas);

    useEffect(() => {
        dispatch(actions.getTipoReceitas());
    }, [])

    return (
        <>
            <Container>
                <Content>
                    {tipoReceitas.map((element, key) => {
                        return <Card>
                            <TouchableOpacity key={key}>
                                <CardItem button onPress={() => props.navigation.navigate('Receitas', { receitaId: element.tipoReceitaId })}>

                                    <Body onCLick={() => props.navigation.navigate('Receitas', { itemId: element.tipoReceitaId })}>
                                        <Text>
                                            {element.descricao}
                                        </Text>
                                    </Body>

                                </CardItem>
                            </TouchableOpacity>
                        </Card>

                    })}
                </Content>
            </Container>
        </>
    );
}

TipoReceitas.navigationOptions = {
    title: 'Categoria Receita',
    header: 'Categorias'
}

export default TipoReceitas;
