import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Coin from './components/Coin'
import './App.css'
const API = 'https://api.coinmarketcap.com/v1/ticker/?limit=2000'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lockedCoins: [],
            coins: []
        }        
    }

    componentDidMount(){
        fetch(API)
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    lockedCoins: data,
                    coins: data
                })
            })
    }

    handleChange(term){
        const coins = this.state.lockedCoins
        const lowerCase = term.toLowerCase()
        const result = []
        for(let item of coins){
            if(item.id.slice(0, lowerCase.length)===lowerCase){
                result.push(item)
            }
        }
        this.setState({
            coins: result
        })
    }

    handleSort(data){
        this.setState({
            coins: data
        })
    }

    render(){
        return (
            <div className='App'>
                <Form onSearchTermChange={(term)=>this.handleChange(term)}/>
                <table>
                    <thead>
                        <Header onSort={(data)=>this.handleSort(data)}
                                coins={this.state.coins} />
                    </thead>
                    <tbody>
                        {this.state.coins.map(coin=>{
                            return(
                                <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    rank={coin.rank}
                                    price_usd={coin.price_usd}
                                    percent_change_1h={coin.percent_change_1h} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default App