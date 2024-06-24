import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
// import Skills from './components/Skills';
import Projects from './components/Projects';
// import ContactSection from './components/ContactSection';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget'; // Import the ChatWidget component

import './index.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialChatMessage, setInitialChatMessage] = useState('');

  const handleCardClick = (query) => {
    setInitialChatMessage(query);
    setIsChatOpen(true);
  };

  return (
    <div className="bg-transparent min-h-screen">
      <main className="relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <HeroSection />
        <AboutSection />
        <Experience onCardClick={handleCardClick} />
        <Projects />
        <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} initialMessage={initialChatMessage} />
      </main>
    </div>
  );
}

export default App;
