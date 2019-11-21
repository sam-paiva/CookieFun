const initalState = {
    tipoReceitas: []
}

export default function receitas(state = initalState, action){
    switch(action.type){
        case 'FETCH_TIPO_RECEITAS':
            state.tipoReceitas = action.payload
            return Object.assign({}, state);
        default:
            return state;
    }
}