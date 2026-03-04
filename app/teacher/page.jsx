'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function TeacherPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const check = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role, email')
        .eq('id', user.id)
        .single();

      if (!profile || profile.role !== 'teacher') {
        router.push('/login');
        return;
      }

      setEmail(profile.email || user.email);
    };

    check();
  }, [router]);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Teacher Dashboard</h1>
      <p>Welcome, {email}</p>
      <p>Here you will manage classes, assign activities, and track progress.</p>
      <button
        onClick={logout}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: 999,
          border: 'none',
          background: '#ef4444',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
}
