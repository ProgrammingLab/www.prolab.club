export default function Contact() {
  return (
    <div className="h-[80vh] bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8 tracking-tight">
        彼が部長だ！
      </h1>
      <a
        href="mailto:s64234kh@kurume.kosen-ac.jp"
        className="text-xl sm:text-2xl md:text-5xl font-semibold text-cyan-300 hover:text-pink-400 transition-colors duration-300 underline decoration-purple-400 decoration-2 underline-offset-4 hover:decoration-pink-400"
      >
        s64234kh@kurume.kosen-ac.jp
      </a>
    </div>
  );
}
