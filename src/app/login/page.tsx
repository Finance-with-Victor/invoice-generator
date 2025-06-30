// app/login/page.tsx
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button'; // from shadcn

export default function LoginPage() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is already logged in, redirect to the dashboard
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Login to InvoiceGen</h1>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
    </div>
  );
}