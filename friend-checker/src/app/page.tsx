import React from 'react';
import './globals.css';
import { Button } from '@heroui/button';

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
        <Button className="bg-amber-300" isDisabled size="sm">Click me</Button>

      </div>
    </div>
  );
}
