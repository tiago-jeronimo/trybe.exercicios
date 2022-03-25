const Redux = require('redux');

// Action que altera o estado
// Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store . 
// Em Redux nós utilizamos o actionCreator , que nada mais do que uma função que retorna uma action .

// Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store .
const actionCreator = (email) => ({
    type: "LOGIN",
    email});


  // Estado da aplicação 
  const ESTADO_INICIAL = {
    login: false,
    email: "",
  }; 

  
  // Os reducers são responsáveis por manipular a store seguindo as regras definidas pelas actions 
  // Os reducers são importantes para evitar a manipulação direta da store e facilitam a manutenção do código.

  // Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer .
  // O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store .

  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default:
        return state;
    }
  };

// Criado e retornando nossa store e retornar a nossa store
// A store é onde o estado da sua aplicação fica registrado e protegido. 
  const store = Redux.createStore(reducer);
  
// Conseguimos mudar o estado da store utilizando o dispatch .
// Ele despacha nossa action para dentro do reducer , para que nosso estado seja alterado. 
// Note, também, que o reducer retorna todo o estado , e não somente o que será modificado.
  store.dispatch(actionCreator("exemplo@email.com"));


 // Verificamos o output quando acessamos a store com a função getState() .
  console.log(store.getState());
  