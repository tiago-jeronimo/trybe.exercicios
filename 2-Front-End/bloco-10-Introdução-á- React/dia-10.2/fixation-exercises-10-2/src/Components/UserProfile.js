import React from "react";


class UserProfile extends React.Component{
    render() {
        return (
            <section>
                <h2>Meu nome é { this.props.user.name }</h2>
                <p> Meu Id é { this.props.user.id } </p>
                <p> Esse é meu email 👉 { this.props.user.email } </p>
                <img src= { this.props.user.avatar } alt={ this.props.user.name } />
            </section>
        )
        
    }
}
export default UserProfile;