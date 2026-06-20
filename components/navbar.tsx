import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export const Navbar = () => {
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
          <Link href="/sign-in">
            <Button variant="ghost" size="lg">
              Sign in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="lg">Start now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
