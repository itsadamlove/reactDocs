import React from 'react'
import TemperatureInput from './TemperatureInput.js'
import BoilingVerdict from './BoilingVerdict.js'

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9
}
const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32
}

const tryConvert = (temperature, convert) => {
  console.log(`trying to convert ${temperature} through ${convert}`)
  const input = parseFloat(temperature)
  console.log(`input is ${input}`)
  if (Number.isNaN(input)) {
    console.log(`NANANANANA`)
    return ''
  }
  const output = convert(input)
  console.log(`output is ${output}`)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }


  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature: temperature})
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return(
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

      <BoilingVerdict
        celsius={parseFloat(celsius)} />
      </div>
    )
  }
}


export default Calculator
