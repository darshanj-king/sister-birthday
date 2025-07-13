import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const StoryBook = () => {
  const [visibleChapters, setVisibleChapters] = useState<number[]>([]);
  const navigate = useNavigate();

  const chapters = [
    { id: 1, title: "Your Strength", content: "You've stood tall even when the world felt heavy. Through every storm, you've been the lighthouse guiding others home." },
    { id: 2, title: "Your Chaos", content: "You make messes magical. Your beautiful chaos brings color to the mundane and turns ordinary moments into adventures." },
    { id: 3, title: "Your Heart", content: "Your compassion knows no bounds. You love fiercely, protect quietly, and heal hearts without even knowing it." },
    { id: 4, title: "How Much I Love You", content: "There are no chapters left — only forever. My love for you is infinite, unconditional, and eternal. You are my greatest blessing." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChapters(prev => {
        if (prev.length < chapters.length) {
          return [...prev, prev.length + 1];
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-200">
          <h1 className="text-4xl font-bold text-amber-800 text-center mb-8" style={{fontFamily: 'Caveat, cursive'}}>
            If You Were a Story
          </h1>
          <p className="text-amber-600 text-center mb-12 text-lg italic">
            The most beautiful story ever written...
          </p>

          <div className="space-y-12">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`transform transition-all duration-1000 ${
                  visibleChapters.includes(chapter.id)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="border-l-4 border-purple-400 pl-6">
                  <h2 className="text-2xl font-bold text-purple-800 mb-4" style={{fontFamily: 'Caveat, cursive'}}>
                    Chapter {chapter.id}: {chapter.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{fontFamily: 'Caveat, cursive'}}>
                    {chapter.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-purple-100 rounded-full px-6 py-3">
              <p className="text-purple-800 font-medium" style={{fontFamily: 'Caveat, cursive'}}>
                The End... or is it just the beginning? 💜
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/gift')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full"
            >
              ← Back to Surprise
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryBook;