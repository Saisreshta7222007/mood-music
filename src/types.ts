export type Mood =
  | 'happy'
  | 'sad'
  | 'calm'
  | 'excited'
  | 'romantic'
  | 'chill'
  | 'focus'
  | 'party'
  | 'nostalgic'
  | 'motivated'
  | 'dreamy'
  | 'epic'
  | 'all';

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  mood: Mood[];
  coverColor?: string;
  audioUrl: string;
}
