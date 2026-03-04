'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function StudentPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

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
        .select('role, email, age_group')
        .eq('id', user.id)
        .single();

      if (!profile || profile.role !== 'student') {
        router.push('/login');
        return;
      }

      setEmail(profile.email || user.email);
      setAgeGroup(profile.age_group || '');
    };

    check();
  }, [router]);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Student Dashboard</h1>
      <p>Welcome, {email}</p>
      <p>Age group: {ageGroup || 'not set yet'}</p>

      <div style={{ marginTop: '1.5rem' }}>
        <h2>Your Robotics World</h2>
        <p>
          Here we will load the correct experience for ages {ageGroup || '3–4 / 5–7 / 8–11 / 12–14 / 15–18'}.
        </p>
      </div>

      <button
        onClick={logout}
        style={{
          marginTop: '1.5rem',
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
