import React, { Component } from 'react'
import Option from './Option'
import './select.css'

export class Select extends Component {

    constructor(props) {
        super(props)


        
        

        
        this.state = {
             open : false,
             isValue : false,
             value : null,
             bgcolor1 : null,
             bgcolor2 : null
        }
    }
    
    handleCheckbox = (e) =>{
        this.setState({
            open: !this.state.open
        })
        
    }

    handleSelect = (id,value) => {
        let tempColor1,tempColor2
        if(id==="1"){
            // tempColor1 = "#32c766"
            tempColor1 = "#0bab64"
            tempColor2 = "#3bb78f"
        }
        if(id==="2"){
            // tempColor1 = "#0057ff"
            tempColor1 = "#00c6ff"
            tempColor2 = "#0072ff"
        }
        if(id==="3"){
            // tempColor1 = "#f48024"
            tempColor1 = "#fe8c00"
            tempColor2 = "#f83600"
        }
        if(id==="4"){
            // tempColor1 = "#d62f2f"
            tempColor1 = "#e65245"
            tempColor2 = "#e43a15"
        }
        if(id==="5"){
            // tempColor1 = "#333"
            tempColor1 = "#414345"
            tempColor2 = "#232526"
        }
        this.setState({
            open: !this.state.open,
            isValue : true,
            value,
            bgcolor1 : tempColor1,
            bgcolor2 : tempColor2,
        })
        
        this.props.setGolbalLevel(id)
    }
    
    render() {
        const val = this.state.isValue ? this.state.value : "Select Difficulty"
        const bgc = this.state.bgcolor1? ({backgroundImage : "linear-gradient( 135deg ,"+ this.state.bgcolor1 + ","+ this.state.bgcolor2  +")"}):null
        return (
            <div className="select">
                <input type="checkbox" id="select-checkbox" name="select-checkbox" checked={this.state.open} onChange={this.handleCheckbox}/>
                <div id="select-button" style={bgc}>
                    <div id="value" style={this.state.isValue?{color : 'white'}:null}><span>{val}</span></div>
                    <div id="chevrons">
                        <i style={this.state.isValue?{color : 'white'}:null}>&#9650;</i>
                        <i style={this.state.isValue?{color : 'white'}:null}>&#9660;</i>
                    </div>
                </div>
                <div id="options">
                    <Option value="Noob" handler = {this.handleSelect}  id="1"/>
                    <Option value="Pro" handler = {this.handleSelect} id="2" />
                    <Option value="Legend" handler = {this.handleSelect} id="3" />
                    <Option value="Hacker" handler = {this.handleSelect} id="4" />
                    <Option value="God" handler = {this.handleSelect} id="5"  />
                </div>
            </div>
        )
    }
}

export default Select
