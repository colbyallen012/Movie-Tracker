import React, { Component } from 'react';
import { SignUp } from '../SignUp/SignUp'
import { login, showError } from '../../actions';
import { connect } from 'react-redux';
import { getUser } from '../../api/apiCalls'


class SignUpMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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
    return (
      <div>
        <SignUp name={this.state.name} email={this.state.email} password={this.state.password} handleAddChange={this.handleAddChange} handleAdd={this.handleAdd}/>
      </div>
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
