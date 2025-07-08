"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();
  return (
    <div className="w-full flex items-center justify-between">
      <h1>Finance Manager Home Page...</h1>
      <Button onClick={onOpen}>Create Account</Button>
    </div>
  );
}
