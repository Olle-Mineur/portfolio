export default function Nav() {
  return (
    <nav className="w-full flex flex-wrap justify-center gap-2 px-4 py-2">
      {[
        ["Home", "/"],
        ["Resume", "/resume"],
        ["Projects", "/projects"],
      ].map(([title, url]) => (
        <a
          key={title}
          href={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 dark:text-gray-100"
        >
          {title}
        </a>
      ))}
    </nav>
  );
}