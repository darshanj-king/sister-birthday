import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Star {
  id: number;
  x: number;
  y: number;
  message: string;
  clicked: boolean;
}

const UniverseStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const messages = [
    "You're the kindest person I know.",
    "You protect me even when I don't ask.",
    "Your smile brightens everyone's day.",
    "You make the world a better place.",
    "Your heart is pure gold.",
    "You're stronger than you know.",
    "You bring magic to ordinary moments.",
    "You're my favorite person."
  ];

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 8; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 70 + 15,
          message: messages[i],
          clicked: false
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const handleStarClick = (starId: number) => {
    const star = stars.find(s => s.id === starId);
    if (star) {
      setShowMessage(star.message);
      setStars(prev => prev.map(s => 
        s.id === starId ? { ...s, clicked: true } : s
      ));
      setTimeout(() => setShowMessage(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 stars-bg"></div>
      
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8 font-serif">
          A Universe Where You're the Star
        </h1>
        <p className="text-purple-200 text-center mb-8 text-lg">
          Click on the stars to reveal messages from your heart 💜
        </p>
        
        {stars.map(star => (
          <div
            key={star.id}
            className={`absolute cursor-pointer transition-all duration-500 ${
              star.clicked ? 'star-clicked' : 'star-glow'
            }`}
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            onClick={() => handleStarClick(star.id)}
          >
            <div className="text-yellow-300 text-2xl animate-pulse">✨</div>
          </div>
        ))}
        
        {showMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-purple-800 bg-opacity-90 p-6 rounded-lg max-w-sm mx-4 text-center animate-fade-in">
              <p className="text-white text-lg font-medium">{showMessage}</p>
            </div>
          </div>
        )}
        
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            onClick={() => navigate('/gift')}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-6 py-3 rounded-full backdrop-blur-sm"
          >
            ← Back to Surprise
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        .stars-bg {
          background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                           radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                           radial-gradient(1px 1px at 90px 40px, #fff, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: twinkle 4s ease-in-out infinite alternate;
        }
        
        .star-glow {
          filter: drop-shadow(0 0 10px rgba(255, 255, 0, 0.8));
        }
        
        .star-clicked {
          transform: scale(1.2);
          filter: drop-shadow(0 0 15px rgba(255, 255, 0, 1));
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default UniverseStars;