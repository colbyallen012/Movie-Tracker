import React, { Component } from 'react';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp'
import { signUp, login, showError } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { getUser } from '../../api/apiCalls'

class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      display: 'start',
      error: ''
    };
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    getUser(this.state)
    .then(data => this.props.login(data))
    this.setState({display: 'loggedIn'})
  }

  render() {
    const isLoggedIn = this.state.display === 'loggedIn'
    let view;
    
    if(!isLoggedIn) {
      view = <Login email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    } else {
      view = <Redirect to='/Login'/>
    }
    return (  
      <div>
        {/* <Login email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> */}
        {view}
      </div>
    )
  }
};

const mapStateToProps = (store) => ({
  login: store.login,
  showError: store.showError
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  showError: (error) => dispatch(showError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
