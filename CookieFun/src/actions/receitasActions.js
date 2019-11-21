import * as actions from '../services/service';

export function getReceitas() {
    return dispatch => {
        const response = actions.getReceitasAsync();

        response.then(function (response) {
            dispatch({ type: 'FETCH_TIPO_RECEITAS', payload: response.data });
        });
    }

}