
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase.js';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);

        try {
            await sendPasswordResetEmail(auth, email.trim());

            setMessage(
                'If an account exists with this email address, a password reset email has been sent. Please check your inbox and spam folder.'
            );

            setEmail('');
        } catch (err) {
            console.error('Password reset error:', err.code, err.message);

            if (err.code === 'auth/invalid-email') {
                setError('Please enter a valid email address.');
            } else if (err.code === 'auth/too-many-requests') {
                setError('Too many attempts. Please try again later.');
            } else if (err.code === 'auth/operation-not-allowed') {
                setError(
                    'Password reset is unavailable. Please check your Firebase Authentication settings.'
                );
            } else {
                setError(
                    'Unable to send the password reset email. Please try again.'
                );
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="auth-page">
            <section className="auth-card">
                <h1>Forgot Password?</h1>
                <p>Enter your registered email address to reset your password.</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="reset-email">Your email</label>
                    <input
                        id="reset-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    {error && (
                        <p className="form-error" role="alert">
                            {error}
                        </p>
                    )}

                    {message && (
                        <p className="success-message" role="status">
                            {message}
                        </p>
                    )}

                    <button
                        className="primary-button"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Reset Email'}
                    </button>
                </form>

                <p className="auth-switch">
                    Remember your password? <Link to="/login">Back to Login</Link>
                </p>
            </section>
        </main>
    );
}
