import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold'>Sign Up</h1>
      <form>
        <input type='text' placeholder='Name' className='input input-bordered w-full max-w-xs' />
        <input type='email' placeholder='Email' className='input input-bordered w-full max-w-xs' />
        <input type='password' placeholder='Password' className='input input-bordered w-full max-w-xs' />
        <button type='submit' className='btn'>Sign Up</button>
      </form>
      <Link to='/login'>Already have an account? Login</Link>
    </div>
  );
}

export default SignupPage;