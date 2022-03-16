import React from "react";

class AddPlayer extends React.Component {
    state = {
        value: ''
    }

    stateChange = (e) =>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addPlayer(this.state.value)

        this.setState({
            value: ''
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input 
                    type="text"
                    onChange={this.stateChange}
                    value={this.state.value}
                    placeholder='Add player name'
                />
                <input 
                    type="submit"
                    value='Add player'
                  />
            </form>
        )
    }
}

export default AddPlayer