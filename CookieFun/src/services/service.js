import axios from 'axios';
import Config from 'react-native-config';

export const getTipoReceitasAsync = async () => {
    const response = await axios.get(Config.APP_URL_BASE + '/tipoReceita');

    return response;
}

export const getTodasReceitasAsync = async (receitaId) => {
    const response = await axios.get(Config.APP_URL_BASE + '/receita', {
        params: { tipoReceita: receitaId.toString() }
    });

    return response;
} 