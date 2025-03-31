"use client";
import useAuthContext from '@/hooks/auth/useAuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isLogged } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!isLogged) {
            router.push('/sign-in');
        }
        console.log('isLogged', isLogged)
    }, [isLogged, router]);

    if (!isLogged) {
        return null;
    }

    return <>{children}</>;
}