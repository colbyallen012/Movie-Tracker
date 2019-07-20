import React, { Component } from 'react';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp'
import { signUp, login, showError } from '../../actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class AccountMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addUser(this.state)
  }

  getUser = async (user) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }
     
      const response = await fetch('http://localhost:3000/api/users', options)
      const result = await response.json()

      return this.props.login(result.data)
    } catch (error) {
      throw Error(error.message)
    } 
  }

  addUser = async (user) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      const response = await fetch('http://localhost:3000/api/users/new', options)
      const result = await response.json()
      
      if (!response.ok) {
        return this.props.showError('An account has already been created with this email')
      } else {
        return this.props.signUp(result.data)
      }
    } catch (error) {
      throw Error(error.message);
    }
  }

  render() {
    return (  
      <div>
        {/* <Login email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> */}
        <SignUp name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
};

const mapStateToProps = (store) => ({
  signUp: store.signUp,
  login: store.login,
  error: store.showError
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  login: (user) => dispatch(login(user)),
  showError: (error) => dispatch(showError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
