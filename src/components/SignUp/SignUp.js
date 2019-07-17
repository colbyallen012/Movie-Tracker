import React from 'react';

export const SignUp = ({name, email, password, handleChange, handleSubmit}) => {

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
    </form>
  </section>
  )
};
