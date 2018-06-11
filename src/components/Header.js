import React from 'react'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sort_state: 'rank'
        }
    }
    
    sortName(type){
        let data = this.props.coins
        if(this.state.sort_state !== type){
            data.sort((a, b)=>{
                if(a.id < b.id){ return -1 }
                if(a.id > b.id){ return 1 }
                return 0
            })
        }else{
            data.reverse()
        }
        this.props.onSort(data)
        this.setState({
            sort_state: type
        })
    }

    sortNumber(type){
        let data = this.props.coins
        if(this.state.sort_state !== type){
            data.sort((a, b)=>{
                return a[type] - b[type]
            })
        }else{
            data.reverse()
        }
        this.props.onSort(data)
        this.setState({
            sort_state: type
        })
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