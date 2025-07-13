import React, { useState } from 'react';
import LandingPage from './LandingPage';
import PhotoGallery from './PhotoGallery';
import WhyYoureBias from './WhyYoureBias';
import GiftReveal from './GiftReveal';
import BTSPlaylist from './BTSPlaylist';
import LetterToSister from './LetterToSister';
import WishJar from './WishJar';

const BirthdayApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, 6));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToGiftPage = () => {
    setCurrentPage(3);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <LandingPage onNext={nextPage} />;
      case 1:
        return <PhotoGallery onBack={prevPage} onNext={nextPage} />;
      case 2:
        return <WhyYoureBias onBack={prevPage} onNext={nextPage} />;
      case 3:
        return <GiftReveal onBack={prevPage} onPlaylist={() => goToPage(4)} onLetter={() => goToPage(5)} onWishJar={() => goToPage(6)} />;
      case 4:
        return <BTSPlaylist onBack={goToGiftPage} />;
      case 5:
        return <LetterToSister onBack={goToGiftPage} />;
      case 6:
        return <WishJar onBack={goToGiftPage} />;
      default:
        return <LandingPage onNext={nextPage} />;
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
    </div>
  );
};

export default BirthdayApp;