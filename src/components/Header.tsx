export default function Header() {
  return (
    <header className="mb-10 text-center relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <span className="text-4xl">🌹</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-serif italic text-rose-800 mb-2 pt-8">
        Romantic Mood Music
      </h1>
      <p className="text-lg text-rose-600 max-w-2xl mx-auto font-light">
        Let the music speak the language of your heart ♥️
      </p>
      <div className="mt-4 flex justify-center gap-2">
        <span className="inline-block w-16 h-0.5 bg-rose-300"></span>
        <span className="inline-block w-4 h-0.5 bg-rose-300"></span>
        <span className="inline-block w-15 h-0.5 bg-rose-300"></span>
      </div>
    </header>
  );
}
