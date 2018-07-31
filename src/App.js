import React, {Component} from 'react'
import Header from './components/Header'
import Coin from './components/Coin'
import SearchBar from './components/SearchBar'
const API = 'https://api.coinmarketcap.com/v1/ticker/?limit=2000'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            coins: [],
            length: null,
            sort_state: 'rank',
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
                    length: data.length,
                    isLoading: false
                })
                this.lockedCoins = data
            })
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.coins.length !== 0
    }

    handleSort(data, type){
        this.setState({
            coins: data,
            length: data.length,
            sort_state: type
        })
    }

    onInputChange(term){
        const coins = [...this.lockedCoins]
        const lowerCase = term.toLowerCase()
        const result = coins.filter(item => item.name.toLowerCase().slice(0, lowerCase.length)===lowerCase)
        this.setState({
            coins: result,
            length: result.length
        })
    }

    render(){
        const cryptocurrency = (
            <div className='App'>
                <SearchBar change={(term) => this.onInputChange(term)} length={this.state.length} />
                <table>
                    <Header onSort={(data, type)=>this.handleSort(data, type)}
                                coins={this.state.coins}
                                sort={this.state.sort_state} />
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

        const loading = (<div className="loader"></div>)

        return this.state.isLoading ? loading : cryptocurrency
    }
}


export default App