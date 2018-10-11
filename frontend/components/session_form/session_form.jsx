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
    this.props.processForm(user).then( () =>
    this.props.history.push('/'))
  }

  update(field) {
    return e=> this.setState ({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div class='login-container'>
        <form onSubmit={this.handleSubmit}>
          <div class='login-form'>
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
