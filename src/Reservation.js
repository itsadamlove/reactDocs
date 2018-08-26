import React from 'react'

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    // Check the value if regular input of checkbox state if checkbox
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    // Using ES6 computer property name syntax
    this.setState({[name]: value})
  }

  render() {
    return(
      <form>
        <label>
          Is going:
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          Number of guests:
          <input
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>

    )
  }

}

export default Reservation
