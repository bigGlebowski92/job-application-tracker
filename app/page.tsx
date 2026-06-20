import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-foreground text-4xl font-bold">
              A better way to track your job applications
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Track your job applications in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-semibold">
                  Start now <ArrowRight className="size-4 ml-2" />
                </Button>
              </Link>
              <p className="text-muted-foreground text-sm">Free forever</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
