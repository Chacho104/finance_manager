import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex flex-col items-center justify-center px-4">
        <ClerkLoaded>
          <SignIn path="/sign-in" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
}
