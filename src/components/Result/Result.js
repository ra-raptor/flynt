import React, { Component } from 'react'
import './result.css'

export class Result extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    handleRetry = () =>{
        setTimeout(() => this.props.retry(),600)
    }
    render() {
        let levelStyle
        if(this.props.level === "1"){
            levelStyle = {color : "#32c766"}
        }else if(this.props.level === "2"){
            levelStyle = {color : "#0057ff"}
        }else if(this.props.level === "3"){
            levelStyle = {color : "#f48024"}
        }else if(this.props.level === "4"){
            levelStyle = {color : "#d62f2f"}
        }else if(this.props.level === "5"){
            levelStyle = {color : "#333"}
        }else{
            levelStyle = {color : "#000"}
        }
        return (
            <div className="result-wrapper">
                <div className="result">
                    <h1>flyn't</h1>
                    <hr className="hr"/>
                    <div className="show">
                        <div className="show-items">
                            <span>Level</span>
                            <span style={levelStyle}>{this.props.level}</span>
                        </div>
                        <div className="show-items">
                            <span>Score</span>
                            <span style={levelStyle}>{this.props.score}</span>
                        </div>
                    </div>
                    <div className="retry-btn-wrapper">
                        <button className="retry-btn" onClick={this.handleRetry}>RETRY</button>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Result
