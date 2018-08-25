import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }

    // This binding is needed to make 'this' relate to the correct thing in the on click event when using this ES6 component declaration
    this.handleClick = this.handleClick.bind(this)
  }

  // This function is NOT BOUND
  handleClick() {
    console.log('this is: ', this)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  // Or you can use this kind of arrow function
  // THIS FUNCTION IS BOUND
  //handleClick = () => {
    //console.log('this is: ', this)
    //this.setState(prevState => ({
      //isToggleOn: !prevState.isToggleOn
    //}))
  //}

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }

}

export default Toggle
