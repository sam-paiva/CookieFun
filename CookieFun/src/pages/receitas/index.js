import React from 'react';
import { Container, Content, Header, Card, Body, CardItem, Title, Text } from 'native-base';


const Receitas = (props) => {
    return (
        <>
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    Massas
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    Comida Caseira
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    Japonesa
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
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
