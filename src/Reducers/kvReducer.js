

function kvReducer(state, action){
    let newState;
    console.log(action);
        switch (action.type) {
            case 'add_kv':
            newState =  [...state, 1]
            break;
            default: newState =[...state]
                break;
        }




    return newState;
}

export default kvReducer;