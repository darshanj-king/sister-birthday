import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BiasCard from './BiasCard';

interface WhyYoureBiasProps {
  onBack: () => void;
  onNext: () => void;
}

const WhyYoureBias: React.FC<WhyYoureBiasProps> = ({ onBack, onNext }) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  
  const reasons = [
    { 
      member: "RM", 
      reason: "You're a natural leader who inspires everyone around you 🌟",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
    },
    { 
      member: "Jin", 
      reason: "Your humor and warmth light up every room you enter 😊",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face"
    },
    { 
      member: "Suga", 
      reason: "You're incredibly talented and passionate about everything you do 🎵",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face"
    },
    { 
      member: "J-Hope", 
      reason: "Your positive energy is contagious and lifts everyone's spirits ☀️",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face"
    },
    { 
      member: "Jimin", 
      reason: "You're kind-hearted and always care for others before yourself 💖",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face"
    },
    { 
      member: "V", 
      reason: "Your unique personality and creativity make you one of a kind 🎨",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop&crop=face"
    },
    { 
      member: "Jungkook", 
      reason: "You're our golden maknae - talented, sweet, and absolutely amazing 🌟",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=300&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    reasons.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 600);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-lavender-100 p-4 py-8 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-12">
          💜 Why You're My Bias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((item, index) => (
            <BiasCard
              key={index}
              member={item.member}
              reason={item.reason}
              photo={item.photo}
              index={index}
              isVisible={visibleCards.includes(index)}
            />
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button
            onClick={onBack}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full"
          >
            ← Back
          </Button>
          <Button
            onClick={onNext}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
          >
            Final Surprise →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyYoureBias;