'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import DashboardWrapper from '@/components/dashboard-wrapper';
import { getUserInvoices, getUserProfile, updateUserProfile } from '@/lib/fireStoreService';
import { Invoice, UserProfile } from '@types';
import { toast } from 'sonner';
import { LoadingPage } from '@/components/ui/loading-spinner';
import { ProfileSkeleton } from '@/components/ui/dashboard-skeleton';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [companyName, setCompanyName] = useState('');

  // Protect the route
  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
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
      toast.success('Profile updated successfully!');
      setCompanyName(''); // Clear input after saving
      alert('Profile updated!');
    }
  };

  if (loading) {
    return (
      <DashboardWrapper>
        <ProfileSkeleton />
      </DashboardWrapper>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <DashboardWrapper>
      <div className="container mx-auto p-8 bg-gradient-to-br from-purple-50 to-blue-100 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Welcome, {user.displayName || 'User'}!</h1>
          <Button onClick={logout} variant="destructive">Logout</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <Card className="col-span-1 bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-900 shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                <AvatarFallback>{(user.displayName || 'U').slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <CardTitle>{user.displayName || 'User'}</CardTitle>
              <span className="text-sm text-blue-800">{user.email}</span>
            </CardHeader>
            <CardContent>
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
                <Button onClick={handleProfileUpdate} className="w-full bg-blue-700 text-white hover:bg-blue-800">Save Profile</Button>
              </div>
            </CardContent>
          </Card>

          {/* Invoices Section */}
          <Card className="col-span-2 bg-gradient-to-tr from-green-200 to-green-400 text-green-900 shadow-lg">
            <CardHeader>
              <CardTitle>Your Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              {invoices.length > 0 ? (
                <ul className="divide-y divide-green-300">
                  {invoices.map(invoice => (
                    <li key={invoice.id} className="py-2 flex justify-between items-center">
                      <span>{invoice.clientName}</span>
                      <span className="font-semibold">${invoice.amount}</span>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${invoice.status === 'paid' ? 'bg-green-600 text-white' : 'bg-yellow-400 text-gray-900'}`}>{invoice.status}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-green-800">You have no invoices yet.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardWrapper>
  );
}
