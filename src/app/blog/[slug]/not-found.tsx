import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center w-max-3xl relative">
      <div className="z-50  mb-20 flex flex-col gap-2 text-center">
        <h2>404 - Not Found</h2>
        <p>Could not find requested resource</p>
        <Link
          className="font-bold text-3xl hover:text-teal-500 underline"
          href="/"
        >
          Return Home
        </Link>
      </div>
      <div className="absolute   inset-0 bg-linear-to-b  from-amber-700/50 via-zinc-800/80 to-purple-900/30 to-90%"></div>
      <div className="relative  z-20 flex mx-auto border-2 border-dashed border-zinc-100/50 rounded-full p-8 aspect-square animate-orbit motion-reduce:animate-none">
        <span className="absolute -top-25 text-6xl material-symbols material-symbols-filled text-teal-500 rotate-70">
          rocket_launch
        </span>
      </div>
    </div>
  );
}
