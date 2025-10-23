// Plain JS reimplementation of the main features: mood filter, play/stop, like, progress
const songs = [
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

const moodOptions = [
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

const moodSelect = document.getElementById('moodSelect');
const quickButtons = document.getElementById('quickButtons');
const results = document.getElementById('results');
const nowPlaying = document.getElementById('nowPlaying');
const nowTitle = document.getElementById('nowTitle');
const nowArtist = document.getElementById('nowArtist');
const nowStop = document.getElementById('nowStop');
const nowToggle = document.getElementById('nowToggle');
const nowProgress = document.getElementById('nowProgress');

let selectedMood = 'all';
let liked = new Set();
let currentAudio = null;
let currentSongId = null;
let progressTimer = null;

function initControls() {
  moodOptions.forEach((opt) => {
    const o = document.createElement('option');
    o.value = opt.value;
    o.textContent = `${opt.emoji} ${opt.label}`;
    moodSelect.appendChild(o);

    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'px-3 py-1 rounded-full cursor-pointer bg-white/60 border border-gray-200';
    b.textContent = `${opt.emoji} ${opt.label}`;
    b.addEventListener('click', () => {
      setMood(opt.value);
    });
    quickButtons.appendChild(b);
  });

  moodSelect.addEventListener('change', (e) => {
    setMood(e.target.value);
  });
  nowStop.addEventListener('click', stopSong);
  nowToggle.addEventListener('click', () => {
    if (currentAudio) {
      if (currentAudio.paused) currentAudio.play();
      else currentAudio.pause();
    }
  });
}

function setMood(m) {
  selectedMood = m;
  moodSelect.value = m;
  render();
}

function render() {
  results.innerHTML = '';
  const filtered =
    selectedMood === 'all' ? songs : songs.filter((s) => s.mood.includes(selectedMood));
  if (filtered.length === 0) {
    results.innerHTML = '<div class="card">No songs found</div>';
    return;
  }

  filtered.forEach((song) => {
    const card = document.createElement('div');
    card.className = 'card';
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    const cover = document.createElement('div');
    cover.className = 'cover';
    cover.style.background = song.coverColor;
    left.appendChild(cover);

    const meta = document.createElement('div');
    const t = document.createElement('div');
    t.className = 'title';
    t.textContent = song.title;
    meta.appendChild(t);
    const a = document.createElement('div');
    a.className = 'artist';
    a.textContent = song.artist;
    meta.appendChild(a);
    left.appendChild(meta);

    const actions = document.createElement('div');
    actions.style.marginTop = '8px';
    const like = document.createElement('button');
    like.type = 'button';
    like.innerText = '❤';
    like.className = 'like px-2 py-1 cursor-pointer';
    if (liked.has(song.id)) like.classList.add('active');
    like.addEventListener('click', () => {
      toggleLike(song.id, like);
    });
    const play = document.createElement('button');
    play.type = 'button';
    play.innerText = 'Play';
    play.className = 'px-3 py-1 cursor-pointer';
    play.addEventListener('click', () => {
      playSong(song.id);
    });
    actions.appendChild(like);
    actions.appendChild(play);

    card.appendChild(left);
    card.appendChild(actions);
    results.appendChild(card);
  });
}

function toggleLike(id, btn) {
  if (liked.has(id)) {
    liked.delete(id);
    btn.classList.remove('active');
  } else {
    liked.add(id);
    btn.classList.add('active');
  }
}

function playSong(id) {
  const song = songs.find((s) => s.id === id);
  if (!song) return;
  if (currentSongId === id) {
    // toggle
    if (currentAudio.paused) currentAudio.play();
    else currentAudio.pause();
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }

  const audio = new Audio(song.audioUrl);
  currentAudio = audio;
  currentSongId = id;
  audio
    .play()
    .then(() => {
      nowPlaying.classList.remove('hidden');
      nowTitle.textContent = song.title;
      nowArtist.textContent = song.artist;
      nowToggle.textContent = 'Pause';
      nowProgress.style.width = '0%';
      progressTimer = setInterval(() => {
        if (currentAudio && currentAudio.duration) {
          nowProgress.style.width = (currentAudio.currentTime / currentAudio.duration) * 100 + '%';
        }
      }, 500);
    })
    .catch((e) => {
      console.error('play error', e);
      currentSongId = null;
      currentAudio = null;
    });

  audio.onended = () => {
    currentSongId = null;
    nowPlaying.classList.add('hidden');
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  };
}

function stopSong() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  currentSongId = null;
  nowPlaying.classList.add('hidden');
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
}

initControls();
render();
