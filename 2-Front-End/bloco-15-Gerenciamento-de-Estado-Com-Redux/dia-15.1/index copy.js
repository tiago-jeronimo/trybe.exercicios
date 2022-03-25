const Redux = require('redux');
const actionCreator = (number) => ({
  type:  "NUMBER",
  number});

  const ESTADO_INICIAL = {
    number:0
  };

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type){
    case "NUMBER":
    return{
     ...state,  
     number: action.number 
    };
    default:
    return state
  }
}

const store = Redux.createStore(reducer);
store.dispatch(actionCreator(3))
store.dispatch(actionCreator(7))

console.log(store.getState());
