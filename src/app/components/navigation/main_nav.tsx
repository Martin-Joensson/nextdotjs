import Link from "next/link";

export default function MainNav() {
  const navLinks = [
    {
      link: "/classes",
      text: "Classes",
    },
    {
      link: "/about",
      text: "About us",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];
  return (
    <div className="font-rubik font-semibold fixed z-50 w-full  p-4 border-b border-zinc-400 bg-violet-500/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center text-2xl">
          <span className="material-symbols material-symbols-filled items-center text-2xl">
            rocket
          </span>{" "}
          Spacefaring Academy
        </Link>
        <nav className="">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
