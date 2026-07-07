interface buttonProps {
  text: string;
  linkString: string;
  className?: string;
}

export default function Button({ text, linkString, className }: buttonProps) {
  let style = className;
  if (!className) {
    style =
      "bg-zinc-800 border border-zinc-100 hover:bg-amber-600/60 active:bg-amber-800/90 rounded-lg px-10 py-2";
  }

  return (
    <a className={style} href={linkString}>
      {text}
    </a>
  );
}
