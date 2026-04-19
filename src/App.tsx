/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Volume2 } from "lucide-react";

type LetterData = {
  letter: string;
  word: string;
  image: string;
  color: string;
  bg: string;
};

const ALPHABET: LetterData[] = [
  {
    letter: "A",
    word: "Apple",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-red",
    bg: "bg-vibrant-red",
  },
  {
    letter: "B",
    word: "Ball",
    image: "https://images.unsplash.com/photo-1580086319619-3ed71cad3f59?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-blue",
    bg: "bg-vibrant-blue",
  },
  {
    letter: "C",
    word: "Cat",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
  {
    letter: "D",
    word: "Dog",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "E",
    word: "Egg",
    image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-blue",
    bg: "bg-vibrant-blue",
  },
  {
    letter: "F",
    word: "Fish",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-red",
    bg: "bg-vibrant-red",
  },
  {
    letter: "G",
    word: "Grapes",
    image: "https://images.unsplash.com/photo-1537640538966-79f369b41f8f?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
  {
    letter: "H",
    word: "Hat",
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "I",
    word: "Ice",
    image: "https://images.unsplash.com/photo-1516053351318-2d184081313c?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-blue",
    bg: "bg-vibrant-blue",
  },
  {
    letter: "J",
    word: "Juice",
    image: "https://images.unsplash.com/photo-1621506289937-4c1d90ae1f5b?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "K",
    word: "Key",
    image: "https://images.unsplash.com/photo-1610473068533-874211603588?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
  {
    letter: "L",
    word: "Lion",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "M",
    word: "Milk",
    image: "https://images.unsplash.com/photo-1550583724-1255d1426639?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-blue",
    bg: "bg-vibrant-blue",
  },
  {
    letter: "N",
    word: "Nose",
    image: "https://images.unsplash.com/photo-1582213708522-f89632e94437?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-red",
    bg: "bg-vibrant-red",
  },
  {
    letter: "O",
    word: "Orange",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "P",
    word: "Pear",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-green",
    bg: "bg-vibrant-green",
  },
  {
    letter: "Q",
    word: "Queen",
    image: "https://images.unsplash.com/photo-1599385010669-e587bc7723af?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
  {
    letter: "R",
    word: "Rocket",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-red",
    bg: "bg-vibrant-red",
  },
  {
    letter: "S",
    word: "Sun",
    image: "https://images.unsplash.com/photo-1444333509402-dd3cd6993951?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "T",
    word: "Tiger",
    image: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "U",
    word: "Umbrella",
    image: "https://images.unsplash.com/photo-1520635431327-1428a2110c74?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
  {
    letter: "V",
    word: "Violin",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-orange",
    bg: "bg-vibrant-orange",
  },
  {
    letter: "W",
    word: "Water",
    image: "https://images.unsplash.com/photo-1560015534-cee980ba7e13?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-blue",
    bg: "bg-vibrant-blue",
  },
  {
    letter: "X",
    word: "Xylophone",
    image: "https://images.unsplash.com/photo-1620215175664-cb9ef7578e72?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
  {
    letter: "Y",
    word: "Yo-yo",
    image: "https://images.unsplash.com/photo-1531693855577-d77349193f54?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-red",
    bg: "bg-vibrant-red",
  },
  {
    letter: "Z",
    word: "Zebra",
    image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=800&q=80",
    color: "text-vibrant-purple",
    bg: "bg-vibrant-purple",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const current = ALPHABET[index];

  useEffect(() => {
    // Auto-scroll active letter into view
    const activeItem = itemRefs.current[index];
    if (activeItem && scrollContainerRef.current) {
      activeItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [index]);

  const speak = (text: string, onEnd?: () => void) => {
    // Cancel any existing speech to avoid overlap
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Find a soothing Indian English voice (prefer female if possible)
    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(v => 
      (v.lang === 'en-IN' || v.lang === 'hi-IN') && 
      (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google'))
    ) || voices.find(v => v.lang === 'en-IN');

    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    utterance.rate = 0.75; // Slightly slower for a "soothing" effect
    utterance.pitch = 1.1; // Slightly higher pitch often feels friendlier for kids
    
    if (onEnd) {
      utterance.onend = onEnd;
    }
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-sunshine flex flex-col items-center justify-between p-4 sm:p-10 font-sans select-none overflow-hidden text-[#333]">
      {/* Header Bar */}
      <div className="w-full flex justify-between items-center z-10 max-w-2xl px-2 sm:px-0">
        <button
          onClick={() => speak(current.word)}
          className="w-14 h-14 sm:w-20 sm:h-20 bg-vibrant-red rounded-full border-4 border-white shadow-[0_4px_0_#C13B3B] sm:shadow-[0_6px_0_#C13B3B] flex items-center justify-center text-white active:translate-y-1 active:shadow-none transition-all"
        >
          <Volume2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>

        <h1 className="bg-white px-4 py-2 sm:px-8 sm:py-3 rounded-[50px] shadow-[0_4px_0_rgba(0,0,0,0.1)] sm:shadow-[0_6px_0_rgba(0,0,0,0.1)] text-xl sm:text-3xl font-black text-vibrant-red text-white-shadow tracking-tight">
          MY FIRST ABCs
        </h1>

        <div className="w-14 sm:w-20" /> {/* Spacer */}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow w-full flex items-center justify-center py-6 sm:py-10">
        <AnimatePresence mode="wait">
          {!showWord ? (
            <motion.div
              key={`letter-${current.letter}`}
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.2, opacity: 0, rotate: 5 }}
              onClick={() => {
                speak(current.letter, () => setShowWord(true));
              }}
              className="w-full max-w-[320px] sm:max-w-[450px] aspect-square bg-white rounded-[40px] sm:rounded-[60px] border-[8px] sm:border-[12px] border-vibrant-red shadow-[0_10px_0_#FFBD59,0_20px_40px_rgba(0,0,0,0.1)] sm:shadow-[0_15px_0_#FFBD59,0_25px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform"
            >
              <span className="text-[180px] sm:text-[240px] font-black text-vibrant-red leading-none -mt-4">
                {current.letter}
              </span>
              <span className="text-xl sm:text-3xl font-black uppercase tracking-[5px] opacity-20">Tap me!</span>
            </motion.div>
          ) : (
            <motion.div
              key={`word-${current.word}`}
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.2, opacity: 0, rotate: -5 }}
              onClick={() => {
                speak(current.word, () => setShowWord(false));
              }}
              className="w-full max-w-[320px] sm:max-w-[450px] aspect-square bg-vibrant-blue rounded-[40px] sm:rounded-[60px] border-[8px] sm:border-[12px] border-white shadow-[0_10px_0_#36AEB2,0_20px_40px_rgba(0,0,0,0.1)] sm:shadow-[0_15px_0_#36AEB2,0_25px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center cursor-pointer relative active:scale-95 transition-transform overflow-hidden"
            >
              {/* Star Decorations */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-sunshine text-3xl sm:text-5xl opacity-80">★</div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-sunshine text-3xl sm:text-5xl opacity-80 rotate-45">★</div>

              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-6 sm:border-8 border-white shadow-xl mb-4 sm:mb-6 bg-white">
                <img
                  src={current.image}
                  alt={current.word}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-3xl sm:text-5xl font-black text-white uppercase tracking-[3px] sm:tracking-[5px] text-white-shadow">
                {current.word}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Cards */}
      <div 
        ref={scrollContainerRef}
        className="w-full flex justify-start items-center gap-3 sm:gap-6 pb-6 overflow-x-auto px-10 no-scrollbar scroll-smooth"
      >
        {ALPHABET.map((item, i) => (
          <button
            key={item.letter}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => {
              setIndex(i);
              setShowWord(false);
            }}
            style={{ minWidth: window.innerWidth < 640 ? '64px' : '120px' }}
            className={`flex-shrink-0 h-16 sm:h-[120px] rounded-[15px] sm:rounded-[25px] flex items-center justify-center text-2xl sm:text-4xl font-black shadow-[0_4px_0_rgba(0,0,0,0.1)] sm:shadow-[0_8px_0_rgba(0,0,0,0.1)] transition-all ${
              i === index 
                ? "bg-vibrant-green text-white border-4 sm:border-8 border-white translate-y-1 shadow-none" 
                : "bg-white text-vibrant-red"
            }`}
          >
            {item.letter}
          </button>
        ))}
      </div>
    </div>
  );
}
