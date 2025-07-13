import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface WishJarProps {
  onBack: () => void;
}

const WishJar: React.FC<WishJarProps> = ({ onBack }) => {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [usedMessages, setUsedMessages] = useState<number[]>([]);

  const messages = [
    "You light up everyone's world ✨",
    "Your smile is contagious and brightens every room 😊",
    "You're the best sister anyone could ask for 💜",
    "Your passion for BTS shows your beautiful heart 💫",
    "You make every day better just by being you 🌟",
    "Your kindness touches everyone around you 🤗",
    "You're growing into such an amazing person 🦋",
    "Your laughter is music to our ears 🎵",
    "You inspire me to be a better brother every day 💪",
    "Your dreams are valid and you'll achieve them all 🌈",
    "You have the biggest heart I know ❤️",
    "Your creativity and talent amaze me constantly 🎨",
    "You're stronger than you know and braver than you think 🦁",
    "The world is better because you're in it 🌍",
    "You're not just my sister, you're my best friend 👫"
  ];

  const pullMessage = () => {
    let availableMessages = messages.filter((_, index) => !usedMessages.includes(index));
    
    if (availableMessages.length === 0) {
      setUsedMessages([]);
      availableMessages = messages;
    }
    
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const selectedMessage = availableMessages[randomIndex];
    const originalIndex = messages.indexOf(selectedMessage);
    
    setUsedMessages(prev => [...prev, originalIndex]);
    setCurrentMessage(selectedMessage);
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
    setCurrentMessage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">
            🎈 Messages for Adisha
          </h1>
          <p className="text-lg text-purple-700">
            Click on the wish jar to reveal a special message!
          </p>
        </div>

        <div className="text-center mb-8">
          <div 
            className="relative inline-block cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={pullMessage}
          >
            <div className="w-64 h-80 mx-auto bg-gradient-to-b from-purple-300 to-purple-500 rounded-t-full rounded-b-3xl shadow-2xl border-4 border-purple-400 relative overflow-hidden">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-purple-600 rounded-full shadow-inner"></div>
              
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-8 h-2 bg-white/80 rounded-full mx-auto animate-float`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg">
                ✨ Wishes ✨
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-purple-700 font-semibold">Tap the jar!</p>
            </div>
          </div>
        </div>

        {showMessage && currentMessage && (
          <Card className="bg-white/95 backdrop-blur-sm border-purple-200 p-8 rounded-3xl shadow-2xl mb-8 animate-slide-up">
            <div className="text-center">
              <div className="text-6xl mb-4">💜</div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
                {currentMessage}
              </h3>
              <div className="space-y-4">
                <Button 
                  onClick={pullMessage}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
                >
                  🎁 Pull Another
                </Button>
                <Button 
                  onClick={closeMessage}
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        )}

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

export default WishJar;