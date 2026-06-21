'use client';

import { authClient, signOut } from '@/lib/auth/auth-client';
import { DropdownMenuItem } from './dropdown-menu';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (!result.error) {
          await authClient.getSession();
          router.push('/sign-in');
          router.refresh();
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}
