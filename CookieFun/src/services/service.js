import axios from 'axios';
import Config from 'react-native-config';

export const getReceitasAsync = async() => {
    const response = await axios.get(Config.APP_URL_BASE + '/tipoReceita');

    return response;
} 