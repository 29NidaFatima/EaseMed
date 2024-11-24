import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up'); // Toggle between Sign Up and Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ name, email, password, state });
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'Sign Up' : 'log in'} to book an appointment</p>
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1'
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your full name"
              required
           
            />
          </div>
        )}
        <div className='w-full'>
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your email"
            required
           className='border border-zinc-300 rounded w-full p-2 mt-1'
          />
        </div>
        <div className='w-full' >
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Your password"
            required
           className='border border-zinc-300 rounded w-full p-2 mt-1'
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        <p className="text-sm mt-2">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-blue-500 underline"
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
