import React, { Component } from 'react';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp'
import { signUp } from '../../actions';
import { login } from '../../actions';
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
    this.getUser(this.state)
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

  addUser = () => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify({...this.state}),
      headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  render() {
    return (  
      <div>
        <Login email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {/* <SignUp name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> */}
      </div>
    )
  }
};

const mapStateToProps = (store) => ({
  signUp: store.signUp,
  login: store.login,
  showError: store.showError
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
