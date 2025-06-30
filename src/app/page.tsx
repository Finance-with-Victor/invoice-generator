'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; // from shadcn
import Link from 'next/link';
interface AuthType {
  email: string;
  password: string;
}
export default function LoginPage() {

    const [authData, setAuthData] = useState<AuthType>({
      email: "",
      password: "",
    });
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
  
      setTimeout(() => {
        setAuthData({ email: "", password: "" });
      }, 2000);
    };
  
    const submitValue = (e: any) => {
      setAuthData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };


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

        <div className="flex flex-wrap w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                <Link
                  href="/"
                  className="inline-flex items-center p-4 text-xl font-bold text-white bg-black"
                >
                  The Street University
                </Link>
              </div>
              <div className="flex flex-col justify-center px-8 pt-8 sm:mt-20 md:justify-start md:pt-0 md:px-24 lg:px-32">
                <form
                  className="flex flex-col pt-3 md:pt-8"
                  action=""
                  onSubmit={handleSubmit}
                  method="post"
                >
                  {/* {message !== "" && <Alert status="error" message={message} />} */}
                  <div className="mt-4">
                    <label className="block font-medium text-sm mb-2 text-gray-700">
                      Email
                    </label>
                    <input
                      value={authData.email}
                      onChange={submitValue}
                      className="rounded-md shadow-sm p-2 border-gray-600 border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
        
                  <div className="my-4">
                    <label className="block font-medium text-sm mb-2 text-gray-700">
                      Password
                    </label>
                    <input
                      value={authData.password}
                      autoComplete="current-password"
                      onChange={submitValue}
                      className="rounded-md shadow-sm p-2 border-gray-600 border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full"
                      type="password"
                      name="password"
                      id="password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base mt-4 font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-green-700 focus:outline-none focus:ring-2"
                  >
                    <span className="w-full">Submit</span>
                  </button>
                </form>
                <div className="pt-12 pb-12 text-center">
                  <p>
                    Forgot Password?
                    <Link
                      href="/forgot-password"
                      className="ml-2 font-semibold underline"
                    >
                      Reset here.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 shadow-2xl">
              <img
                className="hidden object-cover w-full md:block"
                src="/images/timesheet_login.jpg"
                alt="The Street University"
              />
            </div>
          </div>
      </div>
    </div>
  );
}