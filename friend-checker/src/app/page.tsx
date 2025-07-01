import React from 'react';
import './globals.css';
import { Button } from '@heroui/button';
import { Motion } from "motion";

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

        <Motion.div
          className="mt-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-amber-300" isDisabled size="sm">Click me</Button>
        </Motion.div>
      </div>
    </div>
  );
}
