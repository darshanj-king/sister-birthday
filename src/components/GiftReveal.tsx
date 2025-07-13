import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface GiftRevealProps {
  onBack: () => void;
  onPlaylist: () => void;
  onLetter: () => void;
  onWishJar: () => void;
}

const GiftReveal: React.FC<GiftRevealProps> = ({ onBack, onPlaylist, onLetter, onWishJar }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleGiftClick = () => {
    setIsOpened(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-purple-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                color: ['#ff69b4', '#dda0dd', '#9370db', '#ba55d3'][Math.floor(Math.random() * 4)]
              }}
            >
              {['🎉', '✨', '💜', '🎊', '⭐'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          🎁 Your Special Surprise
        </h2>
        
        {!isOpened ? (
          <div 
            onClick={handleGiftClick}
            className="cursor-pointer transform hover:scale-105 transition-all duration-300 mb-8"
          >
            <div className="text-8xl md:text-9xl animate-pulse">
              🎁
            </div>
            <p className="text-white/90 text-xl mt-4">
              Click to open your surprise!
            </p>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="text-6xl md:text-7xl mb-6 animate-bounce">
              🎉
            </div>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
                Your surprise is here!
              </h3>
              <p className="text-purple-600 text-lg mb-8">
                Happy 17th Birthday, Adisha! 💜
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Button
                  onClick={onPlaylist}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎧 BTS Playlist
                </Button>
                
                <Button
                  onClick={onLetter}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💌 Letter
                </Button>
                
                <Button
                  onClick={onWishJar}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎈 Wish Jar
                </Button>
                
                <Button
                  onClick={() => navigate('/universe')}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🌌 Universe
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button
                  onClick={() => navigate('/songs')}
                  className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎵 Song Memories
                </Button>
                
                <Button
                  onClick={() => navigate('/story')}
                  className="bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  📖 Your Story
                </Button>
                
                <Button
                  onClick={() => navigate('/vault')}
                  className="bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🔐 Secret Vault
                </Button>
              </div>
              
              <p className="text-sm text-purple-500">
                Choose your adventure!
              </p>
            </Card>
          </div>
        )}
        
        <Button
          onClick={onBack}
          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-6 py-3 rounded-full backdrop-blur-sm"
        >
          ← Back
        </Button>
      </div>
    </div>
  );
};

export default GiftReveal;