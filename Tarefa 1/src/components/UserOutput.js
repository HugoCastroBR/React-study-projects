import React, { Component } from 'react';

class UserOutput extends Component {
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
        };
        return(
            <div style={{backgroundColor: 'cyan'}}>
                <p style={mystyle}>{this.props.username}</p>
                <p>{this.props.username}</p>
            </div>
        )
    }
}

export default UserOutput;