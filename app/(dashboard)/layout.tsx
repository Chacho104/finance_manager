import { Header } from "@/components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-10">{children}</main>
    </>
  );
};

export default DashboardLayout;
