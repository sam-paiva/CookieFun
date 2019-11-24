const initalState = {
    tipoReceitas: [],
    receitas: [],
    loading: false,
    error: false,
    message: ''
}

export default function receitas(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_TIPO_RECEITAS':
            state.tipoReceitas = action.payload
            state.loading = false,
                state.error = false
            return Object.assign({}, state);
        case 'FETCH_RECEITAS':
            state.receitas = action.payload
            state.loading = false,
                state.error = false
            return Object.assign({}, state);
        case 'ADD_RECEITA':
            if (action.payload.status === 200) {
                state.error = false,
                    state.loading = false,
                    state.message = 'Successo ao incluir receita'
            }
            else {
                state.error = true,
                    state.loading = false,
                    state.message = 'Não foi possível incluir a receita :(s'
            }
            return Object.assign({}, state);
        case 'IS_LOADING':
            state.loading = true,
                state.message = ''
            return Object.assign({}, state);
        default:
            return state;
    }
}