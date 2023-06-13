import {Component} from 'react'

class LoginForm extends Component {
  state = {name: '', password: ''}

  FormSubmit = async event => {
    event.preventDefault()
    const {name, password} = this.state
    const obj = {name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(obj),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  UpdateName = event => {
    this.setState({name: event.target.value})
  }

  UpdatePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {name, password} = this.state
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <form onSubmit={this.FormSubmit}>
              <label htmlFor="name">USERNAME</label>
              <input
                placeholder="Username"
                id="name"
                type="text"
                onChange={this.UpdateName}
                value={name}
              />
              <label htmlFor="password">PASSWORD</label>
              <input
                placeholder="Password"
                id="password"
                type="password"
                onChange={this.UpdatePassword}
                value={password}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
