import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { getSession } from '@/lib/auth/auth';
import { NavbarUserMenu } from './navbar-user-menu';

export function NavbarSkeleton() {
  return (
    <nav className="border-border bg-background border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-primary flex items-center gap-2 font-bold"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-2">
          <div className="bg-muted h-9 w-20 animate-pulse rounded-lg" />
          <div className="bg-muted h-9 w-24 animate-pulse rounded-lg" />
        </div>
      </div>
    </nav>
  );
}

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav className="border-border bg-background border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-primary flex items-center gap-2 font-bold"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-2">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="lg">
                  Dashboard
                </Button>
              </Link>
              <NavbarUserMenu
                name={session.user.name ?? 'User'}
                email={session.user.email}
              />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" size="lg">
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="lg">Start now</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
