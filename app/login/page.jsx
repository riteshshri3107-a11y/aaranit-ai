'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let authResult;
      if (mode === 'login') {
        authResult = await supabase.auth.signInWithPassword({ email, password });
      } else {
        authResult = await supabase.auth.signUp({ email, password });
      }

      if (authResult.error) {
        setError(authResult.error.message);
        setLoading(false);
        return;
      }

      // fetch profile to get role
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError('No user found after auth.');
        setLoading(false);
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profileError || !profile) {
        setError('Profile not found or role not set.');
        setLoading(false);
        return;
      }

      const role = profile.role;

      if (role === 'admin') router.push('/admin');
      else if (role === 'teacher') router.push('/teacher');
      else router.push('/student');
    } catch (err) {
      setError('Unexpected error. Check console.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#0b1020',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          border: '1px solid #1f2937',
        }}
      >
        <h1 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.8rem' }}>
          Aarnait AI Portal
        </h1>
        <p style={{ marginTop: 0, marginBottom: '1.5rem', color: '#9ca3af' }}>
          {mode === 'login'
            ? 'Login as Admin, Teacher, or Student'
            : 'Create your account (role set in Supabase)'}
        </p>

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.9rem' }}>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                marginTop: 4,
                padding: '0.6rem 0.75rem',
                borderRadius: 8,
                border: '1px solid #374151',
                background: '#020617',
                color: 'white',
              }}
            />
          </label>

          <label style={{ fontSize: '0.9rem' }}>
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                marginTop: 4,
                padding: '0.6rem 0.75rem',
                borderRadius: 8,
                border: '1px solid #374151',
                background: '#020617',
                color: 'white',
              }}
            />
          </label>

          {error && (
            <div
              style={{
                marginTop: '0.5rem',
                padding: '0.5rem 0.75rem',
                borderRadius: 8,
                background: '#451a1a',
                color: '#fecaca',
                fontSize: '0.85rem',
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '0.75rem',
              padding: '0.7rem 0.75rem',
              borderRadius: 999,
              border: 'none',
              background: loading ? '#4b5563' : '#6366f1',
              color: 'white',
              fontWeight: 600,
              cursor: loading ? 'default' : 'pointer',
            }}
          >
            {loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Sign up'}
          </button>
        </form>

        <div
          style={{
            marginTop: '1rem',
            fontSize: '0.85rem',
            color: '#9ca3af',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </span>
          <button
            onClick={() => {
              setMode(mode === 'login' ? 'signup' : 'login');
              setError('');
            }}
            style={{
              border: 'none',
              background: 'transparent',
              color: '#a5b4fc',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
