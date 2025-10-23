import React from 'react';
import type { Song } from '../types';

type Props = {
  song: Song;
  isPlaying: boolean;
  liked: boolean;
  progress?: number;
  onPlay: (id: string) => void;
  onToggleLike: (id: string) => void;
  // allow React key prop passed by parent
  key?: React.Key;
};

export default function SongCard({
  song,
  isPlaying,
  liked,
  progress = 0,
  onPlay,
  onToggleLike,
}: Props) {
  return (
    <div
      className={`card-romantic card-hover ${
        isPlaying ? 'ring-2 ring-rose-400 shadow-rose-100' : ''
      }`}
    >
      <div className="flex gap-6 items-center">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden group ${
            isPlaying ? 'animate-pulse' : ''
          }`}
          style={{ background: song.coverColor }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          <button
            type="button"
            onClick={() => onPlay(song.id)}
            aria-label={isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
            className="relative z-10 text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-1 cursor-pointer"
          >
            {isPlaying ? (
              <span className="text-2xl">⏸</span>
            ) : (
              <span className="text-2xl">▶️</span>
            )}
          </button>
        </div>
        <div className="flex-1">
          <div className="font-serif text-xl text-rose-800">{song.title}</div>
          <div className="text-sm text-rose-600 font-light mt-1">{song.artist}</div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-rose-500/80 italic">
              {song.album} • {song.duration}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onToggleLike(song.id)}
                className={`transform transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-1 cursor-pointer ${
                  liked ? 'text-red-500' : 'text-rose-300 hover:text-red-500'
                }`}
              >
                {liked ? '💖' : '🤍'}
              </button>
            </div>
          </div>
          {isPlaying && (
            <div className="mt-4">
              <div className="w-full bg-rose-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-rose-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
