import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SecretVault = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (inputValue === '14' || inputValue === '07/14' || inputValue === '7/14') {
      setIsUnlocked(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 flex items-center justify-center p-6">
      <div className="max-w-lg mx-auto text-center">
        {!isUnlocked ? (
          <div>
            <div className="text-8xl mb-4 animate-pulse">🔒💜</div>
            <h1 className="text-3xl font-bold text-white mb-4">Secret Heart Vault</h1>
            <p className="text-purple-200 text-lg mb-8">Tap to unlock the secret...</p>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400">
              <p className="text-white mb-4">Enter your birthday (day only):</p>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="14"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-purple-200 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-center text-xl"
              />
              <button
                onClick={handleUnlock}
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Unlock My Heart 💜
              </button>
              
              {showError && (
                <p className="text-red-300 mt-4">Try again, beautiful! 💜</p>
              )}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="text-6xl mb-6 animate-bounce">💜✨💜</div>
            
            <div className="bg-white bg-opacity-95 rounded-2xl p-6 text-left shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">A Letter From Your Heart</h2>
              <div className="text-gray-800 leading-relaxed text-sm max-h-96 overflow-y-auto">
                <p className="mb-4">My Dearest Adisha,</p>
                <p className="mb-4">As I write this, my heart is overflowing with love for you. You are not just my sister, but my inspiration, my strength, and my greatest joy.</p>
                <p className="mb-4">Watching you grow into the incredible person you are today has been the greatest privilege of my life. Your kindness touches everyone around you, your strength amazes me every day, and your beautiful soul lights up the world.</p>
                <p className="mb-4">Just like BTS says "Love yourself," I want you to know how deeply loved you are. You are worthy of every dream, every happiness, and every beautiful moment life has to offer.</p>
                <p className="mb-4">I promise you this: No matter where life takes us, no matter how far apart we might be, I will always be here for you.</p>
                <p className="mb-4">Happy Birthday, my beautiful star. May this year bring you everything your heart desires and more.</p>
                <p className="font-bold">I'll always be your biggest fan. 💜</p>
                <p className="text-right mt-4 italic">With all my love,<br/>Your Brother</p>
              </div>
            </div>
          </div>
        )}
        
        <Button
          onClick={() => navigate('/gift')}
          className="mt-6 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-6 py-3 rounded-full backdrop-blur-sm"
        >
          ← Back to Surprise
        </Button>
      </div>
    </div>
  );
};

export default SecretVault;