import React, { Component } from 'react';
import { SignUp } from '../SignUp/SignUp'
import { login, showError } from '../../actions';
import { connect } from 'react-redux';
import { getUser } from '../../api/apiCalls'
import { Redirect } from 'react-router'
import './SignUpMenu.css'

class SignUpMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      display: ''
    };
  }

  handleAddChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.addUser(this.state)
    .then(user => this.props.login(user))
    this.setState({display: 'loggedIn'})
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
        return this.props.showError('This user already exists')
      } else {
        return getUser(this.state)
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const isLoggedIn = this.state.display === 'loggedIn'
    let view;

    if(!isLoggedIn) {
      view = <SignUp name={this.state.name} email={this.state.email} password={this.state.password} handleAddChange={this.handleAddChange} handleAdd={this.handleAdd}/>
    } else {
      view = <Redirect to='/Login'/>
    }
    return (
      <section className='sign-up-bar' >
        {view}
      </section>
    )
  }
}

const mapStateToProps = (store) => ({
  showError: store.showError
});


const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  showError: (error) => dispatch(showError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpMenu)
