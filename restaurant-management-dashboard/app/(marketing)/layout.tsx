import { ReactNode } from "react";
import Navbar from "../components/marketing/Navbar";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar></Navbar>

      <main>{children}</main>

      <footer></footer>
    </>
  );
}
