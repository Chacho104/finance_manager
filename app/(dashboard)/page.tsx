import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <h1>Finance Manager</h1>
      <UserButton />
    </div>
  );
}
