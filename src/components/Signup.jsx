
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        if (!firstName.trim() || !lastName.trim()) {
            setError('Please enter your first name and last name.');
            return;
        }

        if (password.length < 6) {
            setError('Your password must contain at least 6 characters.');
            return;
        }

        if (password !== confirmPassword) {
            setError('The passwords do not match. Please try again.');
            return;
        }

        setLoading(true);

        let accountCreated = false;

        try {
            // Create the account in Firebase Authentication.
            const credential = await createUserWithEmailAndPassword(
                auth,
                email.trim(),
                password
            );

            accountCreated = true;

            // Save the user's profile in Firestore.
            await setDoc(doc(db, 'users', credential.user.uid), {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim().toLowerCase(),
                createdAt: serverTimestamp(),
            });

            // Sign out after successful registration.
            await signOut(auth);

            navigate('/login', {
                state: {
                    message: 'Account created successfully. Please log in.',
                },
            });
        } catch (err) {
            console.error('Signup error code:', err.code);
            console.error('Signup error message:', err.message);

            if (accountCreated) {
                setError(
                    'Your account was created, but saving your profile or signing out failed. Please check the browser console and Firestore rules. Do not register the same email again.'
                );
            } else if (err.code === 'auth/email-already-in-use') {
                setError(
                    'This email is already registered. Please log in instead.'
                );
            } else if (err.code === 'auth/invalid-email') {
                setError('Please enter a valid email address.');
            } else if (err.code === 'auth/weak-password') {
                setError('Please choose a stronger password with at least 6 characters.');
            } else if (err.code === 'auth/operation-not-allowed') {
                setError(
                    'Email/Password sign-in is not enabled in Firebase Authentication.'
                );
            } else if (
                err.code === 'permission-denied' ||
                err.code === 'firestore/permission-denied'
            ) {
                setError(
                    'Your account was created, but Firestore denied the profile save. Please check Firestore security rules.'
                );
            } else if (err.code === 'auth/network-request-failed') {
                setError('Network error. Please check your internet connection.');
            } else {
                setError(
                    'We could not complete signup. Please check the browser console for details.'
                );
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="auth-page signup-page">
            <section className="auth-card signup-card">
                <h1>Create a DEV@Deakin Account</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="first-name">First name*</label>
                    <input
                        id="first-name"
                        type="text"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="last-name">Last name*</label>
                    <input
                        id="last-name"
                        type="text"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="signup-email">Email*</label>
                    <input
                        id="signup-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="signup-password">Password*</label>
                    <input
                        id="signup-password"
                        type="password"
                        autoComplete="new-password"
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirm-password">Confirm password*</label>
                    <input
                        id="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        minLength={6}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="form-error" role="alert">
                            {error}
                        </p>
                    )}

                    <button
                        className="primary-button"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Creating account...' : 'Create'}
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </section>
        </main>
    );
}
