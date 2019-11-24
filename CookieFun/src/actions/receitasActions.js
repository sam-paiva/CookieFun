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
        dispatch({ type: 'IS_LOADING' });

        response.then(function (response) {
            dispatch({ type: 'FETCH_RECEITAS', payload: response.data });
        });
    }

}

export function inserirReceita(receita) {
    return dispatch => {
        dispatch({ type: 'IS_LOADING' });
        const response = actions.inserirNovaReceita(receita);

        response.then(function (response) {
            dispatch({ type: 'ADD_RECEITA', payload: response });
        });
    }
}