import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    render(){
        return (
            <form>
                <input type="text"
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)} />
            </form>
        )
    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
        console.log(term)
    }
}

export default Form