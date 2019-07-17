import React from 'react';

export const Login = ({ email, password, handleChange, handleSubmit}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
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
        <button>Login</button>
      </form>
    </section>
     )
  };
