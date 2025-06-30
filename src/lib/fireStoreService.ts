import { firestore } from './firebase';
import { doc, setDoc, getDoc, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { Invoice, UserProfile } from '@types';

// Create or update a user profile
export const updateUserProfile = async (user: User, data: Partial<UserProfile>) => {
  const userRef = doc(firestore, 'users', user.uid);
  await setDoc(userRef, { 
    uid: user.uid,
    email: user.email,
    ...data 
  }, { merge: true });
};

// Get a user's profile
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const userRef = doc(firestore, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data() as UserProfile;
  }
  return null;
};

// Add a new invoice for a user
export const addInvoice = async (userId: string, invoiceData: Omit<Invoice, 'id' | 'userId' | 'createdAt'>) => {
    const invoicesCollection = collection(firestore, 'invoices');
    await addDoc(invoicesCollection, {
        ...invoiceData,
        userId: userId,
        createdAt: new Date(),
    });
};

// Get all invoices for a specific user
export const getUserInvoices = async (userId: string): Promise<Invoice[]> => {
  const invoicesCollection = collection(firestore, 'invoices');
  const q = query(invoicesCollection, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Invoice));
};
