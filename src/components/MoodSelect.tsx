import React from 'react';
import type { Mood } from '../types';

type Props = {
  selected: Mood;
  options: { value: Mood; label: string; emoji: string }[];
  onChange: (m: Mood) => void;
};

export default function MoodSelect({ selected, options, onChange }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <label className="text-sm font-medium text-rose-700 mb-2 block text-center">
          Choose Your Heart's Melody
        </label>
        <select
          value={selected}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value as Mood)}
          className="w-full p-3 border-2 border-rose-200 rounded-xl bg-white/50 backdrop-blur-sm text-rose-800 focus:border-rose-400 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all font-medium text-center"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.emoji} {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <label className="text-sm font-medium text-rose-700 mb-2 block text-center">
          Express Your Feelings
        </label>
        <div className="flex flex-wrap justify-center gap-2">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              role="button"
              aria-pressed={selected === o.value}
              onClick={() => onChange(o.value)}
              className={`px-4 py-2 rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-1 cursor-pointer ${
                selected === o.value
                  ? 'bg-rose-500 text-white shadow-lg border-2 border-rose-400'
                  : 'bg-white/50 backdrop-blur-sm border-2 border-rose-200 text-rose-700 hover:border-rose-400'
              }`}
            >
              {o.emoji} {o.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
