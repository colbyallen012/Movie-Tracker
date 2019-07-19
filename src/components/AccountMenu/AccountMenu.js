import React, { Component } from 'react';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp'
import { signUp } from '../../actions';
import { login } from '../../actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      display: 'start'
    };
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getUser(this.state)
    this.setState({display: 'loggedIn'})
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
    const isLoggedIn = this.state.display === 'loggedIn'
    let view;
    const propped = this.props.user
    console.log(propped)
    
    if(!isLoggedIn) {
      view = <Login email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    } else {
      view = <h2>{`Welcome ${this.props.user.name}!`}</h2>
    }
    return (  
      <div>
        {view}
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
