import React, { Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             btntxt : "FLY",
             btnstyle : null,
             test : Math.random()
        }
    }
    handleButton = () => {
        if (this.props.ans === 1){
            this.setState({
                btnstyle:{
                    background: "linear-gradient(-45deg,#0bab64,#3bb78f)"
                },
                btntxt : "FLYING"
            })
        }else{
            this.setState({
                btnstyle:{
                    background: "linear-gradient(45deg,#e65245,#e43a15)"
                },
                btntxt : "DEAD"
            })
        }
        setTimeout(() =>this.props.click(this.props.id),300)
        
    }

    handleSpace = (event) =>{
        if(event.keyCode === 32){
            this.handleButton()
        }
    }
    componentDidMount = () =>{
        document.addEventListener("keydown" ,this.handleSpace, false)
        setTimeout(() => this.props.pass(this.props.id,this.props.count),this.props.time+300)
    }
    componentWillUnmount = () =>{
        document.removeEventListener("keydown" ,this.handleSpace,false)
    }
    render() {
        let TimerDuration = {
            animation : "progess "+this.props.time+"ms linear"
        }
        let hearts;
        let heartStyle = {
            color : "#f00",
            fontSize : "110%"
        }
        if(this.props.life===1){
            hearts = <span style={heartStyle}>&hearts;</span>
        }else if(this.props.life===2){
            hearts = <span style={heartStyle}>&hearts; &hearts;</span>
        }else if(this.props.life===3){
            hearts = <span style={heartStyle}>&hearts; &hearts; &hearts;</span>
        }else if(this.props.life===4){
            hearts = <span style={heartStyle}>&hearts; &hearts; &hearts; &hearts;</span>
        }else{
            hearts = <span style={heartStyle}>&hearts; &hearts; &hearts; &hearts; &hearts;</span>
        }
        let wrongAnsAnim = null
        if(this.props.lastAns){
            wrongAnsAnim = {
                display : "block",
                animation: "minusHeart 3000ms linear"
            }
        }
        return (
            <div className="card">
                <div style={TimerDuration} className="time-left"></div>
                <div className="card-main">
                    <div className="hud">
                        <div className="number">
                            {this.props.count}/&#8734;
                        </div>
                        <div className="lives">
                            {hearts}
                            <span style={wrongAnsAnim}className="anim">-1 Life</span>
                        </div>
                    </div>
                    
                <p>{this.props.text}</p>
                </div>
                <button onClick={this.handleButton} style={this.state.btnstyle} className="card-btn">{this.state.btntxt}</button>
            </div>  
        )
    }
}

export default Card