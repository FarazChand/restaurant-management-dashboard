import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <aside>Dashboard Navigation</aside>
      <main>{children}</main>
    </div>
  );
}
