import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Song {
  id: number;
  title: string;
  artist: string;
  message: string;
  image: string;
}

const SongReminders = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const navigate = useNavigate();

  const songs: Song[] = [
    {
      id: 1,
      title: "Gaaju Bomma",
      artist: "Your Artist Name",
      message: "This song is special because...",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Dynamite",
      artist: "BTS",
      message: "Your energy is like this chorus — powerful but soft. You light up every room you enter.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Magic Shop",
      artist: "BTS",
      message: "Like this song, you're a safe place for everyone. You heal hearts without even knowing it.",
      image: "/placeholder.svg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.song-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-4 font-serif">
          What This Song Reminds Me Of...
        </h1>
        <p className="text-purple-200 text-center mb-12 text-lg">
          Every melody tells your story
        </p>

        <div className="space-y-8">
          {songs.map((song, index) => (
            <div
              key={song.id}
              data-card-id={song.id}
              className={`song-card transform transition-all duration-1000 ${
                visibleCards.includes(song.id)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-2xl p-6 shadow-2xl border border-purple-400">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-24 h-24 rounded-xl object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {song.title}
                    </h3>
                    <p className="text-purple-200 mb-4">by {song.artist}</p>
                    <p className="text-white text-lg leading-relaxed">
                      {song.message}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <audio controls className="w-full audio-player">
                    {index === 0 ? (
                      <source src={`/audio/${song.title}.mp3`} type="audio/mpeg" />
                    ) : (
                      <source src={`/audio/${song.title.toLowerCase().replace(' ', '_')}.mp3`} type="audio/mpeg" />
                    )}
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => navigate('/gift')}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-6 py-3 rounded-full backdrop-blur-sm"
          >
            ← Back to Surprise
          </Button>
        </div>
      </div>

      <style>{`
        .audio-player {
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .audio-player::-webkit-media-controls-panel {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default SongReminders;