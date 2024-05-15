import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold'>Login</h1>
      <form>
        <input type='email' placeholder='Email' className='input input-bordered w-full max-w-xs' />
        <input type='password' placeholder='Password' className='input input-bordered w-full max-w-xs' />
        <button type='submit' className='btn'>Login</button>
      </form>
      <Link to='/signup'>Don't have an account? Sign up</Link>
    </div>
  );
}

export default LoginPage;