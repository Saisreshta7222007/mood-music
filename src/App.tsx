import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import MoodSelect from './components/MoodSelect';
import SongCard from './components/SongCard';
import NowPlayingBar from './components/NowPlayingBar';
import Footer from './components/Footer';
import { songs as allSongs, moodOptions } from './data';
import type { Mood } from './types';
import './index.css';

export default function App() {
  const [selectedMood, setSelectedMood] = useState<Mood>('all');
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleLike = (id: string) => {
    setLikedSongs((prev: Set<string>) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const playSong = (id: string) => {
    const song = allSongs.find((s) => s.id === id);
    if (!song) return;
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    if (currentlyPlaying === id) {
      if (audioRef.current.paused) audioRef.current.play();
      else audioRef.current.pause();
      return;
    }
    audioRef.current.pause();
    audioRef.current.src = song.audioUrl;
    audioRef.current
      .play()
      .then(() => {
        setCurrentlyPlaying(id);
        setProgress(0);
        audioRef.current!.ontimeupdate = () => {
          if (audioRef.current && audioRef.current.duration)
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        };
        audioRef.current!.onended = () => {
          setCurrentlyPlaying(null);
          setProgress(0);
        };
      })
      .catch((e: unknown) => {
        console.error(e);
      });
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setCurrentlyPlaying(null);
    setProgress(0);
  };

  const filtered =
    selectedMood === 'all' ? allSongs : allSongs.filter((s) => s.mood.includes(selectedMood));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl relative">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmYjZjMSIgZD0iTTI0IDQ0Yy0yLjMgMC00LjMtLjgtNi0yLjRhOC4yIDguMiAwIDAgMS0yLjQtNmMwLTIuMyAxLjMtNC4yIDMuOS01LjhhMTUgMTUgMCAwIDEgOS0yLjRjMy4zIDAgNi4yLjggOC43IDIuNCAyLjYgMS42IDQgMy41IDQgNS44cy0uOCA0LjMtMi40IDZBOCA4IDAgMCAxIDMzIDQ0aC05WiIvPjwvc3ZnPg==')] transform rotate-45"></div>
        <Header />
        <div className="mb-8 backdrop-blur-sm bg-white/30 rounded-2xl p-6 shadow-lg border border-pink-100">
          <MoodSelect
            selected={selectedMood}
            options={moodOptions}
            onChange={(m) => setSelectedMood(m)}
          />
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              {selectedMood === 'all'
                ? 'All Recommendations'
                : `${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Music`}
            </h2>
            <span className="text-sm text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              {filtered.length} songs
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="card p-8 text-center">No songs found for this mood.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  isPlaying={currentlyPlaying === song.id}
                  liked={likedSongs.has(song.id)}
                  progress={currentlyPlaying === song.id ? progress : 0}
                  onPlay={playSong}
                  onToggleLike={toggleLike}
                />
              ))}
            </div>
          )}
        </section>

        <Footer />
      </div>
      <NowPlayingBar
        song={allSongs.find((s) => s.id === currentlyPlaying) || null}
        isPlaying={!!currentlyPlaying}
        onStop={stopSong}
        onToggle={() => {
          if (currentlyPlaying) playSong(currentlyPlaying);
        }}
        progress={progress}
      />
    </div>
  );
}
