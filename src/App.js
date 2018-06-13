import React from 'react'
import Header from './components/Header'
import Coin from './components/Coin'
import './App.css'
const API = 'https://api.coinmarketcap.com/v1/ticker/?limit=2000'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            coins: [],
            isLoading: true
        }        
        this.lockedCoins = []
    }

    componentDidMount(){
        fetch(API)
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    coins: data,
                    isLoading: false
                })
                this.lockedCoins = data
            })
    
       
    }

    handleSort(data){
        this.setState({
            coins: data
        })
    }

    onInputChange(term){
        const coins = this.lockedCoins
        const lowerCase = term.toLowerCase()
        const result = coins.filter(item => item.name.toLowerCase().slice(0, lowerCase.length)===lowerCase)
        this.setState({
            coins: result
        })
    }

    render(){
        return (
            <div className='App'>
                {this.state.isLoading && (<i className="fas fa-spinner"></i>)}
                <form>
                    <input type="text"
                        name="term"
                        onChange={e => this.onInputChange(e.target.value)} />
                </form>
                <table>
                    <thead>
                        <Header onSort={(data)=>this.handleSort(data)}
                                coins={this.state.coins} />
                    </thead>
                    <tbody>
                        {this.state.coins.map((coin,i)=>{
                            return(
                                <Coin
                                    key={i}
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