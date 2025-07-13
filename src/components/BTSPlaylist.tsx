import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  audioSrc: string;
  albumArt: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "Butter",
    artist: "BTS",
    audioSrc: "/audio/butter.mp3",
    albumArt: "/images/butter-album.jpg"
  },
  {
    id: 2,
    title: "Dynamite",
    artist: "BTS",
    audioSrc: "/audio/dynamite.mp3",
    albumArt: "/images/dynamite-album.jpg"
  },
  {
    id: 3,
    title: "Permission to Dance",
    artist: "BTS",
    audioSrc: "/audio/permission-to-dance.mp3",
    albumArt: "/images/ptd-album.jpg"
  },
  {
    id: 4,
    title: "Life Goes On",
    artist: "BTS",
    audioSrc: "/audio/life-goes-on.mp3",
    albumArt: "/images/lgo-album.jpg"
  },
  {
    id: 5,
    title: "Spring Day",
    artist: "BTS",
    audioSrc: "/audio/spring-day.mp3",
    albumArt: "/images/spring-day-album.jpg"
  }
];

interface BTSPlaylistProps {
  onBack: () => void;
}

const BTSPlaylist: React.FC<BTSPlaylistProps> = ({ onBack }) => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  const handleAudioPlay = (songId: number) => {
    setCurrentPlaying(songId);
  };

  const handleAudioPause = () => {
    setCurrentPlaying(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
            🎧 Adisha's BTS Playlist
          </h1>
          <p className="text-lg md:text-xl text-purple-200 italic font-light">
            "You gave me the best of me, so you'll give you the best of you." – BTS
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {songs.map((song) => (
            <Card key={song.id} className="bg-white/10 backdrop-blur-sm border-purple-300/30 p-6 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={song.albumArt} 
                    alt={`${song.title} album art`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                    {song.title}
                  </h3>
                  <p className="text-purple-200 text-sm md:text-base">
                    {song.artist}
                  </p>
                </div>
                
                <div className="w-full md:w-auto">
                  <audio 
                    controls
                    className="w-full md:w-80 h-10 rounded-lg"
                    onPlay={() => handleAudioPlay(song.id)}
                    onPause={handleAudioPause}
                    onError={(e) => {
                      console.log(`Audio file not found: ${song.audioSrc}`);
                    }}
                  >
                    <source src={song.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onBack}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Gift
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BTSPlaylist;