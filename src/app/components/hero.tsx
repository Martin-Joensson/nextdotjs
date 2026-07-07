import Image from "next/image";
import Button from "./button";

export const Hero = () => {
  return (
    <div className="min-h-60 w-full flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="relative flex gap-10 w-full bg-black/30  flex-col items-center justify-between py-44 px-16  sm:items-start">
        <Image
          className="absolute w-full h-full top-0 left-0 z-0 object-cover"
          src={
            "https://www.nasa.gov/wp-content/uploads/2026/06/55323265139-3f76fbd65a-o.jpg"
          }
          width={300}
          height={400}
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-b  from-amber-700/50 via-zinc-800/80 to-purple-900/30 to-90%"></div>
        <div className="relative z-20 flex mx-auto border-2 border-dashed border-zinc-100/50 rounded-full p-8 aspect-square animate-orbit motion-reduce:animate-none">
          <span className="absolute -top-25 text-6xl material-symbols material-symbols-filled text-teal-500 rotate-70">
            rocket_launch
          </span>
        </div>

        <div className="z-10 flex flex-col gap-20 max-w-3xl m-auto text-center justify-between bg-radial-[at_50%_60%] from-black/50 to-70%">
          <h1 className="font-poppins font-black text-6xl leading-none">
            Having fun with <span className="text-amber-500">Next.js</span>{" "}
            today
          </h1>
          <p className="font-poppins text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            incidunt itaque aspernatur quos odit atque perferendis earum, dolor
            cum voluptate quaerat ducimus non minima veniam similique vel
            aperiam voluptatum aliquam harum debitis distinctio laboriosam quam,
            magnam placeat.
          </p>
          <div className="flex justify-center items-center gap-4 flex-col sm:flex-row font-bold">
            <Button text="CTA" linkString="/" className="" />{" "}
            <Button
              text="Let's Go!"
              linkString="/"
              className="bg-teal-300/20 border border-teal-50 hover:bg-teal-400/40 active:bg-teal-600/60 rounded-lg px-10 py-2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
