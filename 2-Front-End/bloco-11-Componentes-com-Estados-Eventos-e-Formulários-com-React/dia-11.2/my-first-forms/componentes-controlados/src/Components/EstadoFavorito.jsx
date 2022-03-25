import React from "react";

export default class EstadoFavorito extends React.Component{
    render(){
        const { value, funcao } = this.props
        return(
            <label>
                Diga qual é o seu Estado favorito?
                <textarea 
                name="estadoFavorito"
                value={ value }
                onChange={ funcao } />
            </label>
        )
    }
    }