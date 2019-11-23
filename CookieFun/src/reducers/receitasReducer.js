const initalState = {
    tipoReceitas: [],
    receitas: []
}

export default function receitas(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_TIPO_RECEITAS':
            state.tipoReceitas = action.payload
            return Object.assign({}, state);
        case 'FETCH_RECEITAS':
            state.receitas = action.payload
            return Object.assign({}, state);
        default:
            return state;
    }
}