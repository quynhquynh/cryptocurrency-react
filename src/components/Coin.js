import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Coin extends Component{
   shouldComponentUpdate(nextProps){
       return this.props.name !== nextProps.name
   }

    render(){
        return (
            <tr>    
                <td>{this.props.name}</td>
                <td style={{textAlign: 'center'}}>{this.props.rank}</td>
                <td style={{textAlign: 'center'}}>{this.props.price_usd}</td>
                <td style={{textAlign: 'center'}}>{this.props.percent_change_1h}%</td>
            </tr>
        )
    }
}


Coin.propTypes = {
    name: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    price_usd: PropTypes.string,
    percent_change_1h: PropTypes.string
}


export default Coin