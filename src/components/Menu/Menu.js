import React, { Component } from 'react'
import Select from './Select'
import './goBtn.css'
import './menu.css'
import Info from './Info'

export class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             level:null,
             playClicked:false,
             error:null
        }
    }

    setLevel = (k) =>{
        this.setState({
            level : k,
            error:null
        })
    }

    

    handlePlayClick = () =>{
        if (this.state.level){
            this.setState({
                playClicked:true,
                error: null
            })
            setTimeout(() => {
                this.props.init(this.state.level)
            },3000)
            
        }else{
            this.setState({
                error: "Please select difficulty"
            })
        }
        
    }
    
    render() {
        const playtext = this.state.playClicked? "loading" : "Play"
        const error = this.state.error? <p>{this.state.error}</p>:null
        return (
            <div className="main-menu">
                <h1>flyn't</h1>
                {this.state.playClicked ? <Info id={this.state.level}/> :<Select setGolbalLevel={this.setLevel}  />} 
                
                <div className="playbtn" onClick={this.handlePlayClick}>
                    
                    <div className="go" onClick={this.handlePlayClick}>{playtext}</div>
                </div>
                <div id="error">{error}</div>

                {/* <br />
                <button onClick={() => this.props.init(5)}>ShortCut</button>  */}

            </div>
        )
    }
}

export default Menu
