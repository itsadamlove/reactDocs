import React from 'react'

class FlavourForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'lime'
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(`Your favourite flavour is ${this.state.value}`)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favourite flavour:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default FlavourForm
