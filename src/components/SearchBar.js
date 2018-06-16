import React from 'react'
import PropTypes from 'prop-types'


class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.term.trim() !== nextState.term.trim()
    }

    render(){
        return (
            <form data-placeholder={`${this.props.length} coins`}>
                <input type="text"
                    name="term"
                    onChange={e => this.onInputChange(e.target.value)} 
                     />
            </form>
        )
    }

    onInputChange(term){
        this.setState({term})
        this.props.change(term)
    }

    
}





export default SearchBar

SearchBar.propTypes = {
    change: PropTypes.func.isRequired,
    length: PropTypes.number
}