"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Welcome back{isLoaded ? ", " : " "}
        {user?.firstName}!
      </h2>
      <p className="text-ms lg:text-base text-gray-200">
        This is your Financial Overview Dashboard
      </p>
    </div>
  );
};
