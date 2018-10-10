import React from 'react';
import {withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e=> this.setState ({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='login-container'>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome to PicturePerfect!</h1>
          {this.props.formType} or {this.props.navLink}
          <div className='login-form'>
            <form>
              <label>
                Username:
                <input type='text' value={this.state.username} onChange={this.update('username')}/>
              </label>
              <label>
                Password:
                <input type='password' value={this.state.password} onChange={this.update('password')}/>
              </label>
              <input type='submit' value={this.props.formType}></input>
            </form>
          </div>
        </form>

      </div>
    )
  }


}
export default withRouter(SessionForm)
