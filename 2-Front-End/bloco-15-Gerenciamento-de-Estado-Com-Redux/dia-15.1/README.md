![Iniciando com Redux em 9 passos. Este tutorial será o mais curto e… | by Rafael Maruta | React Brasil | Medium](https://miro.medium.com/max/800/1*2dJ3D8gz4CVy3EtOJQNZvw.png)

  
  

## Introdução ao Redux - O estado global da aplicação

  

- ### Peças do Redux

  

O **_Redux_** existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado **global** , **acessível a todos os componentes** , onde se pode armazenar e recuperar informações que precisam ser compartilhadas. Essa ferramenta pode ser dividida em três partes principais - `actions` , `stores` e `reducers` .

  

- ### Entendendo actions, stores e reducers

  

![Redux Essentials, Part 1: Redux Overview and Concepts | Redux](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

  

- ### Combinando Reducers

  

CODE:

```  js

const store = Redux.createStore(reducer);

```