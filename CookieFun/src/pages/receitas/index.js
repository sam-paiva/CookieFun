import React, { useEffect } from 'react';
import { Container, Content, Header, Card, Body, CardItem, Title, Text } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { getReceitas } from '../../actions/receitasActions';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Receitas = (props) => {
    const dispatch = useDispatch();

    const tipoReceitas = useSelector(state => state.receitas.tipoReceitas);

    useEffect(() => {
        dispatch(getReceitas());
    }, [])

    return (
        <>
            <Container>
                <Content>
                    {tipoReceitas.map(element => {
                        return<TouchableOpacity onPress={() => {}}> 
                        <Card onCLick={() => {}}>
                            <CardItem>
                                <Body>
                                    <Text>
                                        {element.descricao}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        </TouchableOpacity>
                    })}
                </Content>
            </Container>
        </>
    );
}

Receitas.navigationOptions = {
    title: 'Receitas',
    header: 'Receitas'
}

export default Receitas;
