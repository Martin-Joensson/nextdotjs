import Link from "next/link";

export default function MainNav() {
  return (
    <div className="font-rubik font-semibold fixed z-50 w-full flex items-center justify-between p-4 border-b border-zinc-400 bg-violet-500/60 backdrop-blur-sm">
      <Link href="/" className="flex items-center text-2xl">
        <span className="material-symbols material-symbols-filled items-center text-2xl">
          rocket
        </span>{" "}
        Spacefaring Academy
      </Link>
      <nav className="">
        <ul className="flex gap-8">
          <li>
            <Link href="/classes">Classes</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
