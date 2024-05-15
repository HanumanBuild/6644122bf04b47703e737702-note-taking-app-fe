import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../api';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold'>Login</h1>
      <form>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='input input-bordered w-full max-w-xs' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='input input-bordered w-full max-w-xs' />
        <button type='button' onClick={handleLogin} className='btn'>Login</button>
      </form>
      <Link to='/signup'>Don't have an account? Sign up</Link>
    </div>
  );
}

export default LoginPage;