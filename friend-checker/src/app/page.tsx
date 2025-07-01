import React from 'react';
import { Button } from '@/components/ui/button';
import './globals.css';
export default function Home() {
  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-foreground font-bold">
          Welcome to the Friend Checker App!
        </h1>
        <p className="mt-4 text-lg text-foreground">
          This app helps you keep track of your friends and the last time you spoke to them.
        </p>

        <div className="mt-8">
          <Button
            href="/friends"
            className="px-4 py-2 bg-background text-foreground rounded hover:bg-foreground hover:text-background transition-colors"
          >
            Go to Friends List
          </Button>
        </div>
      </div>
    </div>
  );
}
