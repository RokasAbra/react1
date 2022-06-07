
function colorReducer(state, action) {
    let newState;
    console.log(action);
    //ivyksta daug logikos
    switch(action.type){
        case 'go_pink':
            newState = 'pink';
            break;
        case 'GoYellow':
            newState = 'yellow';
            break;
        case 'chColor':
            newState = state === 'yellow' ? 'pink' : 'yellow';
            break;
        case 'color':
            newState = action.payload
            break
        case 'change_color_to':
            newState = action.payload
            break
            default : newState = state;
        
    }
    

    //

    return newState
}

export default colorReducer;