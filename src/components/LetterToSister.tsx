import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface LetterToSisterProps {
  onBack: () => void;
}

const speakLine = (text: string, typingDurationMs: number): Promise<void> => {
  return new Promise((resolve) => {
    if (!text.trim()) {
      resolve();
      return;
    }
    // Estimate speech duration at rate=1: about 13 chars/sec (typical for English)
    const charsPerSecond = 13;
    const estimatedSpeechDurationMs = (text.length / charsPerSecond) * 1000;
    // Calculate rate to match typing duration
    let rate = estimatedSpeechDurationMs / typingDurationMs;
    // Clamp rate to [0.7, 2] for naturalness
    rate = Math.max(0.7, Math.min(2, rate));
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.1;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
};

const LetterToSister: React.FC<LetterToSisterProps> = ({ onBack }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showSurpriseButton, setShowSurpriseButton] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const isUnmounted = useRef(false);

  const letterLines = [
    "Dear Adisha,",
    "",
    "Happy 17th Birthday, my amazing sister!",
    "",
    "As I write this letter, I can't help but smile thinking about",
    "all the wonderful memories we've shared together.",
    "",
    "You've grown into such an incredible person - kind, funny,",
    "talented, and with the biggest heart I know.",
    "",
    "Your love for BTS shows your passion for music and dreams,",
    "and I admire how you pursue what makes you happy.",
    "",
    "Thank you for being the best sister anyone could ask for.",
    "You bring so much joy and laughter into our family.",
    "",
    "I hope this special day brings you all the happiness",
    "you deserve and more.",
    "",
    "With all my love,",
    "Your Brother 💜"
  ];

  useEffect(() => {
    isUnmounted.current = false;
    return () => {
      isUnmounted.current = true;
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    const typeAndSpeak = async () => {
      setIsTyping(true);
      let text = '';
      for (let i = 0; i < letterLines.length; i++) {
        if (isUnmounted.current) return;
        const line = letterLines[i];
        // Calculate typing duration for this line (80ms per char)
        const typingDurationMs = line.length * 80;
        speakLine(line, typingDurationMs);
        for (let j = 0; j < line.length; j++) {
          if (isUnmounted.current) return;
          text += line[j];
          setDisplayedText(text);
          await new Promise(res => setTimeout(res, 80));
        }
        text += '\n';
        setDisplayedText(text);
        await new Promise(res => setTimeout(res, 200));
      }
      setIsTyping(false);
      setTimeout(() => setShowSurpriseButton(true), 1000);
    };
    setDisplayedText('');
    setShowSurpriseButton(false);
    setShowSurprise(false);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    typeAndSpeak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">
            💌 A Letter to My Sister
          </h1>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-purple-200 p-8 md:p-12 rounded-3xl shadow-2xl mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 shadow-inner">
            <pre className="font-mono text-lg md:text-xl text-purple-900 leading-relaxed whitespace-pre-wrap">
              {displayedText}
            </pre>
            
            {showSurpriseButton && (
              <div className="text-center mt-8 animate-fade-in">
                <Button 
                  onClick={handleSurpriseClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                >
                  🎁 Click for Surprise
                </Button>
              </div>
            )}
          </div>
        </Card>

        {showSurprise && (
          <Card className="bg-white/95 backdrop-blur-sm border-purple-200 p-8 rounded-3xl shadow-2xl mb-8 animate-slide-up">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-6xl">🎂</div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
                Happy Birthday, Adisha! 🎉
              </h3>
              <p className="text-lg text-purple-700 mb-4">
                Your special gift is waiting for you!
              </p>
              <div className="w-32 h-32 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-purple-200">
                <div className="text-xs text-purple-600 text-center">
                  QR Code<br/>Placeholder
                </div>
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

export default LetterToSister;