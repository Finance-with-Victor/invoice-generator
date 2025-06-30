'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { getUserInvoices, getUserProfile, updateUserProfile } from '@/lib/fireStoreService';
import { Invoice, UserProfile } from '@types';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [companyName, setCompanyName] = useState('');

  // Protect the route
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Fetch user data
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userProfile = await getUserProfile(user.uid);
        setProfile(userProfile);
        setCompanyName(userProfile?.companyName || '');

        const userInvoices = await getUserInvoices(user.uid);
        setInvoices(userInvoices);
      }
    };
    fetchData();
  }, [user]);

  const handleProfileUpdate = async () => {
    if (user) {
      await updateUserProfile(user, { companyName });
      alert('Profile updated!');
    }
  };

  if (loading || !user) {
    return <div>Loading...</div>; // Or a nice spinner component
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.displayName || 'User'}!</h1>
        <Button onClick={logout} variant="destructive">Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input 
                id="companyName" 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
                placeholder="Your Company LLC"
              />
            </div>
            <Button onClick={handleProfileUpdate}>Save Profile</Button>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Invoices</h2>
          {invoices.length > 0 ? (
            <ul>
              {invoices.map(invoice => (
                <li key={invoice.id} className="border-b py-2">
                  {invoice.clientName} - ${invoice.amount} ({invoice.status})
                </li>
              ))}
            </ul>
          ) : (
            <p>You have no invoices yet.</p>
          )}
           {/* You would have a button here to trigger your invoice creation modal */}
        </div>
      </div>
    </div>
  );
}
