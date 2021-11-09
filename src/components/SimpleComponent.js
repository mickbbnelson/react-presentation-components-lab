// Code SimpleComponent Here

import React from 'react'

export default class SimpleComponent extends React.Component {
   
    state = {
        mood: "happy"
    }

    handleClick = () => {
        this.setState({
            mood: "sad"
        })
    }

    render() {
        return <div onClick={this.handleClick}>
                <h1>{this.state.mood}</h1>
            </div>
            
    }
}