import React, { Component } from 'react';

class BigBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            r: 255,
            g: 71,
            b: 71
        }
    }

    componentWillReceiveProps (newProps) {
        const newColorString = newProps.addColor.split(',')
        const newColor = {
            r: parseInt(newColorString[0], 16),
            g: parseInt(newColorString[1], 16),
            b: parseInt(newColorString[2], 16)
        }

        this.setState(state => {
            const r = (state.r * .9) + (newColor.r * .1)
            const g = (state.g * .9) + (newColor.g * .1)
            const b = (state.b * .9) + (newColor.b * .1)
            return { r, g, b }
        })
    }
    
    render(){
        const { r, g, b } = this.state
        const style = {
            "background-color": `rgb(${r},${g},${b})`
        }
        return <div className="BigBox" style={ style }></div>
    }
}

export default BigBox