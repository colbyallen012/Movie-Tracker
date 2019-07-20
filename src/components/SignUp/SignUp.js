import React from 'react';
import { connect } from 'react-redux';

export const SignUp = ({name, email, password, handleChange, handleSubmit, error }) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder='Name'
          onChange={handleChange}
        />
        <input
          type="text"
          value={email}
          name="email"
          placeholder='example@example.com'
          onChange={handleChange}
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder='Password'
          onChange={handleChange}
        />
      <button>Sign Up</button>
      {(error !== '') && <h1>{error}</h1>}
    </form>
  </section>
  )
};

const mapStateToProps = store => ({
  error: store.error
});

export default connect(mapStateToProps)(SignUp);