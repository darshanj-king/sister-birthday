import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PhotoGalleryProps {
  onBack: () => void;
  onNext: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onBack, onNext }) => {
  const photos = [
    { id: 1, caption: "Our forever BTS fan 💜", placeholder: "🎵" },
    { id: 2, caption: "Dancing to Dynamite 🕺", placeholder: "💃" },
    { id: 3, caption: "Purple heart forever 💜", placeholder: "💜" },
    { id: 4, caption: "Borahae moments ✨", placeholder: "🌟" },
    { id: 5, caption: "Army since day one 🎶", placeholder: "🎤" },
    { id: 6, caption: "Sweet 17 memories 🎂", placeholder: "🎂" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-8">
          🌟 Memory Lane with Adisha
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo) => (
            <Card key={photo.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-6xl">
                {photo.placeholder}
              </div>
              <div className="p-4">
                <p className="text-center text-purple-700 font-medium">{photo.caption}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button
            onClick={onBack}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full"
          >
            ← Back to Start
          </Button>
          <Button
            onClick={onNext}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
          >
            Next →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;