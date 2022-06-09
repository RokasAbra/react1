import rand from "../../src/Functions/rand";
import randColor from "../../src/Functions/randColor";
function numberListReducer(state, action) {
  let newState;
  switch (action.type) {
    case "go_list":
      newState = [...Array(10)].map((_, i) => ({
        number: ("" + rand(0, 9999)).padStart(4, 0),
        color: randColor(),
        show: true,
        row: i
      }));

      // newState = [];
      // for (let i = 0; i < 10; i++) {
      //     newState.push(('' + rand(0,9999)).padStart(4, 0))

      // }
      break;
    case "order":
        newState = [...state].sort((a, b) => {
          if (a.number > b.number) return -1;
          if (a.number < b.number) return 1;
          return 0;
        });
        break;
    case "more":
      newState = state.map((o) =>
        o.number > 5000 ? { ...o, show: true } : { ...o, show: false });
      break;
    case "less":
      newState = state.map((o) =>
        o.number < 4000 ? { ...o, show: true } : { ...o, show: false });
      break;
      case 'hide':
        // newState = state.filter((e) => e.number - action.payload )
        newState = state.map((o) => o.number === action.payload ? {...o, show: false} : {...o})
        console.log(action);
        break;
    case "reset":
      newState = state.map((o) => ({ ...o, show: true} ))
      console.log(state);
      break;
    case "defGroup":
      newState = [...state].sort((a, b) => a.row - b.row);
      break;
    case 'add':
        newState = [...state, { 
            number: ("" + rand(0, 9999)).padStart(4, 0),
            color: 'black',
            show: true,
            row: state.lenght
        }];
        break;
        case "range":
            newState = state.map((o) =>
              o.number > action.payload  ? { ...o, show: true } : { ...o, show: false });
            break;
    default:
      newState = [] ;
  }
  return newState;
}

export default numberListReducer;
