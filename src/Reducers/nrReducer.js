function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function nrReducer(state, action) {
    let newState;
    console.log(action);
    switch (action.type) {
        case 'goRand':
            newState = ('' + rand(0, 9999)).padStart(4, 0) ;
            break;
        case 'goRand2':
            newState = ('' + action.payload).padStart(4, 0);
            break
        case 'add_text':
            newState = action.payload
            break
        default: newState = state;
            
    }
    return newState
}


export default nrReducer;