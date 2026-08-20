import { ReactNode } from "react";
import Navbar from "../components/marketing/Navbar";
import Footer from "../components/marketing/Footer";

import Navbar2 from "../components/marketing/Navbar2";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>

      <main className="flex-1">{children}</main>

      <Footer></Footer>

    </div>

    </>
  );
}
