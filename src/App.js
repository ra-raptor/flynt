import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import Game from './components/Game/Game'
import Result from './components/Result/Result'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       game:null,
       levelRef: null,
       time:null,
       gameover:false,
    }
  }

  init = (l) =>{
    let t
    if(l==="5"){
      t = 1000
    }else if(l==="4" || l==="3"){
      t = 1500
    }
    else{
      t = 2000
    }
    this.setState({
      game:l,
      levelRef : l,
      time:t,
      life:(6-l)
    })
  }

  gameToOver = (score) =>{
    
    this.setState({
      gameover : true,
      game : null,
      score : score-this.state.life-1
    })
  }

  retry = () =>{
    this.setState({
      game:null,
      levelRef: null,
      time:null,
      gameover:false,
      life: null,
      score : null

    })
  }
  
  render() {
    let display
    if (this.state.game){
      display = <Game life={this.state.life} time={this.state.time} gameOver={this.gameToOver} />
    }else if(this.state.gameover){
      display = <Result level={this.state.levelRef} score={this.state.score} retry={this.retry} />
    }else{
      display = <Menu init={this.init}/>
    }
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default App