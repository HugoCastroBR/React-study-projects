import React, { Component } from 'react';

class UserInput extends Component {
    render(){
        return(
            <input onChange={
                
                (event) => {
                    
                this.props.usernameHandler(event.target.value)
                
            }
            } 
            value={this.props.value}
            >
            </input>
        )
    }
}

export default UserInput;