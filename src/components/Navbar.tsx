import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/router';
import { useAuth } from '@hooks/useAuth';
import { signOutFromGoogle } from '@lib/firebase';

/**
 * Navbar component
 */

export const Navbar: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const { isGuest } = useAuth();

  return (
    <div className="px-4 py-4 pr-8 flex justify-between border-b-2 border-zinc">
      <div className="flex gap-10">
        <Button variant="link" onClick={() => router.push('/')}>
          home
        </Button>
      </div>
      <div>
        {!isGuest && (
          <Button variant="outline" onClick={signOutFromGoogle}>
            sign out
          </Button>
        )}
      </div>
    </div>
  );
};
