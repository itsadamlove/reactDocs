import React from 'react'

class EssayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Please write an essay about your favourite DOM element'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(`An essay was submitted: ${this.state.value}`)
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} rows="8" cols="40"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default EssayForm
