import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate('/');
    } catch (error) {
        console.error("Firebase login error:", error.code);
        console.error("Error message:", error.message);

        if (error.code === "auth/invalid-credential" ||
            error.code === "auth/invalid-login-credentials") {
            setError(
                "Invalid email or password. Please try again or reset your password."
            );
        } else if (error.code === "auth/too-many-requests") {
            setError("Too many attempts. Please try again later.");
        } else if (error.code === "auth/user-disabled") {
            setError("This account has been disabled.");
        } else {
            setError("Unable to log in. Please try again.");
        }
    } finally {
        setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Your email</label>
          <input id="login-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label htmlFor="login-password">Your password</label>
                  <input id="login-password" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required />
                  <p style={{ textAlign: "right", margin: "8px 0" }}>
                      <Link to="/forgot-password">Forgot Password?</Link>
                  </p>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-button" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        <p className="auth-switch">New to DEV@Deakin? <Link to="/signup">Sign up</Link></p>
      </section>
    </main>
  );
}
