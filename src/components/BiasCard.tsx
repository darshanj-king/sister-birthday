import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

interface BiasCardProps {
  member: string;
  reason: string;
  photo: string;
  index: number;
  isVisible: boolean;
}

const BiasCard: React.FC<BiasCardProps> = ({ member, reason, photo, index, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative w-full h-64 perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front side - BTS member photo */}
          <Card className="absolute inset-0 w-full h-full backface-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src={photo}
                alt={member}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="font-bold text-white text-xl">{member}</h3>
                <p className="text-white/80 text-sm">Click to reveal note 💜</p>
              </div>
            </div>
          </Card>

          {/* Back side - Personal note */}
          <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-400 to-pink-400 border-0 shadow-lg rounded-2xl">
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{member}</h3>
              <p className="text-white text-sm leading-relaxed">{reason}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BiasCard;