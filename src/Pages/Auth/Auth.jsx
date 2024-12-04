import React, { useState } from 'react';
import { auth } from '../../Utils/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import './common.css'

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/Amazon-Clone/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  return (
    <div className="signin-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="signin-logo" />
      <h1>Sign-In</h1>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Sign In'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        By signing in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
      </p>
      <button className="create-account-button" onClick={handleCreateAccount}>Create your Amazon Account</button>
    </div>
  );
};

export default SignIn;
