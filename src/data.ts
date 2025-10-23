import type { Song, Mood } from './types';

export const songs: Song[] = [
  {
    id: '1',
    title: 'Happy Vibes',
    artist: 'Joyful Sounds',
    album: 'Sunshine Days',
    duration: '3:45',
    mood: ['happy', 'excited'],
    coverColor:
      "url('https://media.istockphoto.com/id/1324305887/vector/lettering-good-vibes-only-this-on-a-white-background-dark-phrase-on-a-light-background.jpg?s=612x612&w=0&k=20&c=2Vt747LBsZWFWxSgrYKSJHnH9XknOZXEG6qP7ama4T4=') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '2',
    title: 'Melancholy Nights',
    artist: 'Blue Notes',
    album: 'Rainy Windows',
    duration: '4:20',
    mood: ['sad', 'calm'],
    coverColor:
      "url('https://musicglue-images-prod.global.ssl.fastly.net/swishallnet/product/melancholy-nights-volume-two?u=aHR0cHM6Ly9tdXNpY2dsdWUtdXNlci1hcHAtcC0zLXAuczMuYW1hem9uYXdzLmNvbS9vcmlnaW5hbHMvZjgzNzI3YzctZjY3Zi00M2M5LWJjOGQtZTI1NDFjMGIwZDJk&mode=contain&width=700&v=2') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: '3',
    title: 'Peaceful Mind',
    artist: 'Zen Garden',
    album: 'Meditation',
    duration: '5:15',
    mood: ['calm'],
    coverColor:
      "url('https://images.unsplash.com/photo-1626063239176-f0f869bb60c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2UlMjBvZiUyMG1pbmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: '4',
    title: 'Energy Boost',
    artist: 'Power Beats',
    album: 'Workout Mix',
    duration: '2:58',
    mood: ['excited', 'happy'],
    coverColor:
      "url('https://content.health.harvard.edu/wp-content/uploads/2023/10/6fd1a0a7-8e9f-49c6-b234-7189c969f125.jpg') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: '5',
    title: 'Heartbreak Symphony',
    artist: 'Broken Strings',
    album: 'Emotional Journey',
    duration: '4:33',
    mood: ['sad'],
    coverColor:
      "url('https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653361995i/58315751.jpg') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: '6',
    title: 'Endless Romance',
    artist: 'Lover’s Dream',
    album: 'Hearts Entwined',
    duration: '3:58',
    mood: ['romantic'],
    coverColor:
      "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
  {
    id: '7',
    title: 'Chill Breeze',
    artist: 'Cool Collective',
    album: 'Evening Flow',
    duration: '4:10',
    mood: ['chill'],
    coverColor:
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  },
  {
    id: '8',
    title: 'Deep Focus',
    artist: 'Mindset',
    album: 'Concentration',
    duration: '5:00',
    mood: ['focus'],
    coverColor:
      "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  },
  {
    id: '9',
    title: 'Party Lights',
    artist: 'DJ Spark',
    album: 'Nightlife',
    duration: '3:30',
    mood: ['party'],
    coverColor:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  },
  {
    id: '10',
    title: 'Golden Memories',
    artist: 'Retro Soul',
    album: 'Back in Time',
    duration: '4:05',
    mood: ['nostalgic'],
    coverColor:
      "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
  {
    id: '11',
    title: 'Rise Up',
    artist: 'Motivators',
    album: 'Push Forward',
    duration: '3:50',
    mood: ['motivated'],
    coverColor:
      "url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
  },
  {
    id: '12',
    title: 'Dreamscape',
    artist: 'Starlit',
    album: 'Night Visions',
    duration: '4:44',
    mood: ['dreamy'],
    coverColor:
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
  },
  {
    id: '13',
    title: 'Epic Journey',
    artist: 'Orchestra Nova',
    album: 'Legends',
    duration: '5:20',
    mood: ['epic'],
    coverColor:
      "url('https://www.thelist.com/img/gallery/difficult-places-for-a-woman-to-travel-alone/intro-1494986335.jpg') center/cover",
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
  },
];

export const moodOptions: { value: Mood; label: string; emoji: string }[] = [
  { value: 'all', label: 'All Moods', emoji: '🎵' },
  { value: 'happy', label: 'Happy', emoji: '😊' },
  { value: 'sad', label: 'Sad', emoji: '😢' },
  { value: 'calm', label: 'Calm', emoji: '😌' },
  { value: 'excited', label: 'Excited', emoji: '🤩' },
  { value: 'romantic', label: 'Romantic', emoji: '💖' },
  { value: 'chill', label: 'Chill', emoji: '🧊' },
  { value: 'focus', label: 'Focus', emoji: '🎧' },
  { value: 'party', label: 'Party', emoji: '🎉' },
  { value: 'nostalgic', label: 'Nostalgic', emoji: '🕰️' },
  { value: 'motivated', label: 'Motivated', emoji: '💪' },
  { value: 'dreamy', label: 'Dreamy', emoji: '🌙' },
  { value: 'epic', label: 'Epic', emoji: '🔥' },
];
