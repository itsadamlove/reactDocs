import React from 'react'
import Greeting from './Greeting.js'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    // Need to bind this because didnt use arrow function
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  // do these work without binding?
  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false})
  }

  // do i need the this.state ?
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }

    return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
    )
  }

}

export default LoginControl
