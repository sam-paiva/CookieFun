import * as actions from '../services/service';

export function getTipoReceitas() {
    return dispatch => {
        const response = actions.getTipoReceitasAsync();

        response.then(function (response) {
            dispatch({ type: 'FETCH_TIPO_RECEITAS', payload: response.data });
        });
    }

}


export function getReceitas(receitaId) {
    return dispatch => {
        const response = actions.getTodasReceitasAsync(receitaId);

        response.then(function (response) {
            dispatch({ type: 'FETCH_RECEITAS', payload: response.data });
        });
    }

}