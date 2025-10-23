import type { Song } from '../types';

type Props = {
  song?: Song | null;
  isPlaying: boolean;
  onStop: () => void;
  onToggle: () => void;
  progress: number;
};

export default function NowPlayingBar({ song, isPlaying, onStop, onToggle, progress }: Props) {
  if (!song) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-white/80 border-t border-rose-100 p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-rose-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg">
            {isPlaying ? '♬' : '♪'}
          </div>
          <div>
            <p className="font-medium text-rose-800">{song.title}</p>
            <p className="text-sm text-rose-600">{song.artist}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onStop}
            className="px-4 py-2 text-rose-600 hover:text-rose-800 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-1 cursor-pointer"
          >
            Stop
          </button>
          <button
            type="button"
            onClick={onToggle}
            className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-1 cursor-pointer"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-2">
        <div className="w-full bg-rose-100 rounded-full h-1.5 overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="bg-gradient-to-r from-rose-400 to-pink-500 h-1.5 rounded-full transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
