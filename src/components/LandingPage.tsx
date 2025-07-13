import React from 'react';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onNext: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-purple-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            💜
          </div>
        ))}
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-bounce">
          🎉 Happy 17th Birthday Adisha 💜
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
          You are loved beyond words. Let's celebrate... BTS style!
        </p>
        
        <Button
          onClick={onNext}
          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
        >
          Start the Surprise ✨
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;