import React, { Component } from 'react'

const convertToRGB = colorString => {
    return colorString.split(',').map(hexColor => {
        return parseInt(hexColor, 16)
    }).join(',')
}

class Buttons extends Component {
    shouldComponentUpdate() {
        return false
    }
    
    render() {
        const { colors, clickHandler } = this.props
        const buttons = colors.map((colorString, idx) => {
            console.log(`rgb(${convertToRGB(colorString)})`)
            const style = {
                "background-color": `rgb(${convertToRGB(colorString)})`
            }
            return <div key={idx} className="ColorButton" style={ style } value={colorString}></div>
        })
        return (
        <div className="Buttons" onClick={ clickHandler }>
            { buttons }
        </div>
        )
    }
}

export default Buttons