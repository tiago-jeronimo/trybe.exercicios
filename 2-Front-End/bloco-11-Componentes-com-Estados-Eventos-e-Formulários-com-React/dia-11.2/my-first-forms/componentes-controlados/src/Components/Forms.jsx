import React from "react";
import EstadoFavorito from "./EstadoFavorito";

export default class Forms extends React.Component{
    constructor(){
        super();
        this.state = {
            estadoFavorito:"",
            meuEmail:""
        }
    }

    handleTexareaChange = ({ target }) => {
       const { name, value } = target;
        this.setState({
        [name]: value
    })
    }

    render(){
        return(
            <div>
            <h1>Estados do React</h1>
            <EstadoFavorito
             value={this.state.estadoFavorito}
              funcao={this.handleTexareaChange}/>
            <label>
                Diga qual é o seu email?
                <input type="email" name="meuEmail"
                  value={ this.state.meuEmail }
                  onChange={ this.handleTexareaChange } />
            </label>
            </div>
        )
    }
}

