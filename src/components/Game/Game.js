import React, { Component } from 'react'
import './game.css'
import Card from './Card'
import Data from '../data/data'


export class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totNO : 150,
             lifeLeft : this.props.life,
             count : 1,
             dataList : [Data[Math.floor(Math.random()*150)]],
             clicked : [],
             store : [],
             lastAnswerWrong : null
        }

        
    }


    
    handleClick = (id) =>{
        this.setState({
            dataList  : this.state.dataList.filter((data) => {
                return data.id !== id
            }),
            count : this.state.count +1,
            clicked : [...this.state.clicked,this.state.count]
        })
        if(this.state.clicked.length > 3){
            let arr = this.state.clicked.slice(1)
            this.setState({
                clicked : arr
            })
        }
        if(Data[id-1].value !== 1){
            this.setState({
                lifeLeft : this.state.lifeLeft - 1,
                lastAnswerWrong : 1
            })
        }else{
            this.setState({
                lastAnswerWrong : null
            })
        }
        if(this.state.lifeLeft < 1){
            this.props.gameOver(this.state.count)
        }else{
            this.newData()
        }
        
    }

    handlePass = (id,count) =>{
        
        if(this.state.clicked.includes(count)){

        }else{
            this.setState({
                dataList  : this.state.dataList.filter((data) => {
                    return data.id !== id
                }),
                count : this.state.count +1,
            })
            if(Data[id-1].value !== 0){
                this.setState({
                    lifeLeft : this.state.lifeLeft - 1,
                    lastAnswerWrong : 1
                })
            }else{
                this.setState({
                    lastAnswerWrong : null
                })
            }
            if(this.state.lifeLeft < 1){
                this.props.gameOver(this.state.count)
            }
            this.newData()
        }
    }

    newData = () => {
        if(this.state.lifeLeft > 0){
            let TempData
            let TempRandom = Math.floor(Math.random()*1.9)
            if (TempRandom === 0){
                TempData = Data[Math.floor(Math.random()*60)]
            }else if(TempRandom === 1){
                TempData = Data.slice(61)[Math.floor(Math.random()*89)]
            }else{
                this.newData()
            }
            if(this.state.store.includes(TempData.id)){
                this.newData()
            }else{
                this.setState({
                    store : [...this.state.store,TempData.id],
                    dataList : [TempData]
                })
            }
            if(this.state.store.length > 55){
                let arr = this.state.store.slice(1)
                this.setState({
                    store : arr
                })
            }
  
            
        }
        
    }
    render() {
        return (
            <div id="game">
                {
               
                this.state.dataList.map((item) => {
    
                    
                    return <Card time={this.props.time}
                    key = {item.id}
                    click={this.handleClick} 
                    pass = {this.handlePass}
                    count={this.state.count}
                    life={this.state.lifeLeft}
                    text={item.name}
                    ans = {item.value}
                    id = {item.id}
                    lastAns = {this.state.lastAnswerWrong}
             />
        })}
            </div>
        )
    }
}

export default Game
