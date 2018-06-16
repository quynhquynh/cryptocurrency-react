import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component{
    shouldComponentUpdate(nextProps){
        return false
    }

    sortName(type){
        let data = [...this.props.coins]
        if(this.props.sort !== type){
            data.sort((a, b)=>{
                if(a.id < b.id){ return -1 }
                if(a.id > b.id){ return 1 }
                return 0
            })
        }else{
            data.reverse()
        }
        this.props.onSort(data, type)
    }

    sortNumber(type){
        let data = [...this.props.coins]
        if(this.props.sort !== type){
            data.sort((a, b)=>{
                return a[type] - b[type]
            })
        }else{
            data.reverse()
        }
        this.props.onSort(data, type)
    }

    render(){
        return(
            <tr>
                <th onClick={()=>this.sortName('name')}>Coin</th>
                <th onClick={()=>this.sortNumber('rank')}>Rank</th>
                <th onClick={()=>this.sortNumber('price_usd')}>Price in USD</th>
                <th onClick={()=>this.sortNumber('percent_change_1h')}>Change in price</th>
            </tr>
        )
    }
}




export default Header

Header.propTypes = {
    onSort: PropTypes.func.isRequired,
    coins: PropTypes.array.isRequired,
    sort: PropTypes.string.isRequired
}