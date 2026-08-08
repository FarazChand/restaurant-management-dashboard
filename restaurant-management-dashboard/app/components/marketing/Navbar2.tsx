import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar2() {
  return (
    <header className="bg-white border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href={"/"} className="text-2xl font-medium text-black">
          Ember & Basil
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={"/reservations"}
          className="rounded-md bg-black px-5 py-2.5 font-medium text-sm text-white transition hover:bg-gray-800"
        >
          Book a Table
        </Link>
      </div>
    </header>
  );
}
