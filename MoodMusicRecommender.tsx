"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Play, Pause, Heart, Volume2 } from "lucide-react";

// Types
type Mood = "happy" | "sad" | "calm" | "excited" | "all";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  mood: Mood[];
  coverColor: string;
  audioUrl: string;
}

// Mock data with audio URLs
const songs: Song[] = [
  {
    id: "1",
    title: "Happy Vibes",
    artist: "Joyful Sounds",
    album: "Sunshine Days",
    duration: "3:45",
    mood: ["happy", "excited"],
    coverColor: "bg-yellow-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: "2",
    title: "Melancholy Nights",
    artist: "Blue Notes",
    album: "Rainy Windows",
    duration: "4:20",
    mood: ["sad", "calm"],
    coverColor: "bg-blue-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: "3",
    title: "Peaceful Mind",
    artist: "Zen Garden",
    album: "Meditation",
    duration: "5:15",
    mood: ["calm"],
    coverColor: "bg-green-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: "4",
    title: "Energy Boost",
    artist: "Power Beats",
    album: "Workout Mix",
    duration: "2:58",
    mood: ["excited", "happy"],
    coverColor: "bg-red-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: "5",
    title: "Heartbreak Symphony",
    artist: "Broken Strings",
    album: "Emotional Journey",
    duration: "4:33",
    mood: ["sad"],
    coverColor: "bg-purple-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: "6",
    title: "Sunny Afternoon",
    artist: "Acoustic Dreams",
    album: "Chill Vibes",
    duration: "3:52",
    mood: ["calm", "happy"],
    coverColor: "bg-orange-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: "7",
    title: "Dance Floor",
    artist: "Party Kings",
    album: "Nightlife",
    duration: "3:15",
    mood: ["excited"],
    coverColor: "bg-pink-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    id: "8",
    title: "Rainy Day",
    artist: "Gentle Storms",
    album: "Soft Sounds",
    duration: "4:07",
    mood: ["sad", "calm"],
    coverColor: "bg-indigo-400",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  }
];

const moodOptions: { value: Mood; label: string; emoji: string }[] = [
  { value: "all", label: "All Moods", emoji: "🎵" },
  { value: "happy", label: "Happy", emoji: "😊" },
  { value: "sad", label: "Sad", emoji: "😢" },
  { value: "calm", label: "Calm", emoji: "😌" },
  { value: "excited", label: "Excited", emoji: "🤩" }
];

export default function MoodMusicRecommender() {
  const [selectedMood, setSelectedMood] = useState<Mood>("all");
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const toggleLike = (songId: string) => {
    setLikedSongs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(songId)) {
        newSet.delete(songId);
      } else {
        newSet.add(songId);
      }
      return newSet;
    });
  };

  const playSong = (songId: string) => {
    // If same song, toggle play/pause
    if (currentlyPlaying === songId) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
      return;
    }

    // Stop currently playing song
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Clear previous progress interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    // Find the song and play it
    const song = songs.find(s => s.id === songId);
    if (song) {
      const audio = new Audio(song.audioUrl);
      audioRef.current = audio;
      
      audio.play().then(() => {
        setCurrentlyPlaying(songId);
        setProgress(0);
        
        // Update progress
        progressInterval.current = setInterval(() => {
          if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            if (duration) {
              setProgress((currentTime / duration) * 100);
            }
          }
        }, 1000);
      }).catch(error => {
        console.error("Error playing audio:", error);
        setCurrentlyPlaying(null);
      });

      // Handle song end
      audio.onended = () => {
        setCurrentlyPlaying(null);
        setProgress(0);
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      };
    }
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setCurrentlyPlaying(null);
    setProgress(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  const filteredSongs = selectedMood === "all" 
    ? songs 
    : songs.filter(song => song.mood.includes(selectedMood));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">
            AI Mood-Based Music Recommender
          </h1>
          <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
            Discover the perfect soundtrack for your emotions. Select your mood and let our AI find the best music for you.
          </p>
        </header>

        {/* Mood Selection Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">How are you feeling today?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Select Mood
                </label>
                <Select value={selectedMood} onValueChange={(value: Mood) => setSelectedMood(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a mood" />
                  </SelectTrigger>
                  <SelectContent>
                    {moodOptions.map((mood) => (
                      <SelectItem key={mood.value} value={mood.value}>
                        <span className="flex items-center gap-2">
                          <span>{mood.emoji}</span>
                          <span>{mood.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full md:w-2/3">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Quick Select
                </label>
                <div className="flex flex-wrap gap-2">
                  {moodOptions.map((mood) => (
                    <Button
                      key={mood.value}
                      variant={selectedMood === mood.value ? "default" : "outline"}
                      onClick={() => setSelectedMood(mood.value)}
                      className="flex items-center gap-1"
                    >
                      <span>{mood.emoji}</span>
                      <span>{mood.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              {selectedMood === "all" ? "All Recommendations" : `${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Music`}
            </h2>
            <span className="text-sm text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              {filteredSongs.length} songs
            </span>
          </div>

          {filteredSongs.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-gray-500">No songs found for this mood. Try selecting a different mood.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSongs.map((song) => (
                <Card 
                  key={song.id} 
                  className={`hover:shadow-md transition-all ${currentlyPlaying === song.id ? 'ring-2 ring-indigo-500' : ''}`}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`${song.coverColor} border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center`}>
                          {currentlyPlaying === song.id ? (
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                            </div>
                          ) : (
                            <Play className="text-white" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg text-gray-900">{song.title}</h3>
                        <p className="text-gray-600">{song.artist}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-500">{song.album} • {song.duration}</span>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="p-2"
                              onClick={() => toggleLike(song.id)}
                            >
                              <Heart 
                                className={`h-4 w-4 ${likedSongs.has(song.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                              />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="flex items-center gap-1"
                              onClick={() => playSong(song.id)}
                            >
                              {currentlyPlaying === song.id ? (
                                <>
                                  <Pause className="h-3 w-3" />
                                  Pause
                                </>
                              ) : (
                                <>
                                  <Play className="h-3 w-3" />
                                  Play
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        {/* Progress bar for playing song */}
                        {currentlyPlaying === song.id && (
                          <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-indigo-600 h-1.5 rounded-full" 
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Now Playing Bar */}
        {currentlyPlaying && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-500 w-12 h-12 rounded flex items-center justify-center">
                  <Volume2 className="text-white" />
                </div>
                <div>
                  <p className="font-medium">
                    {songs.find(s => s.id === currentlyPlaying)?.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {songs.find(s => s.id === currentlyPlaying)?.artist}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={stopSong}
                >
                  Stop
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  onClick={() => playSong(currentlyPlaying)}
                >
                  {audioRef.current?.paused ? 'Play' : 'Pause'}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm pb-16">
          <p>AI Mood-Based Music Recommender • Recommendations powered by emotional analysis</p>
        </footer>
      </div>
    </div>
  );
}
