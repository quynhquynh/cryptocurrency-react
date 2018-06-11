import React from 'react'

const Coin = (props) => {
    return (
        
        <tr>    
            <td>{props.name}</td>
            <td style={{textAlign: 'center'}}>{props.rank}</td>
            <td style={{textAlign: 'center'}}>{props.price_usd}</td>
            <td style={{textAlign: 'center'}}>{props.percent_change_1h}%</td>
        </tr>
         
    )
}

export default Coin

            