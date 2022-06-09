function BooksReducer(state, action) {
  let newState;
  switch (action.type) {
    case "books":
      newState = action.payload.map((b,i) => ({...b, row: i}));
      break;
    case "sort":
      newState = [...state].sort((a, b) => { 
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
            return 0;
      });
      break;
      case 'sortDef':
          newState = [...state].sort((a, b) => a.row - b.row);
          break;
      case 'byPrice':
          newState = [...state].sort((a) => {
              if (a.price > 13) 
                  return;
              
          } )
          break;
    default:
      newState = [...state]
      break;
  }
  return newState;
}

export default BooksReducer;
