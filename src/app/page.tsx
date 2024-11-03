"use client";
import Image from "next/image";
import Card from "./components/cardComponent";
import { useEffect, useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { getHistory, addHistoryEntry } from "./scripts/History"; // Import from History.ts
import History from "./components/history";


type CardType = {
  name: string;
  Words: string[];
};



export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [randomCards, setRandomCards] = useState<CardType[]>([]);
  const [history, setHistory] = useState<CardType[][]>([]); // Change history type
  const [showHistory, setShowHistory] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getRandomUniqueCards = (cardsArray: CardType[], numCards: number): CardType[] => {
    const shuffled = [...cardsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numCards);
  };

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('/api/cards', { cache: 'force-cache' });
      const data: CardType[] = await response.json();
      setCards(data);
      const initialSet = getRandomUniqueCards(data, 8);
      setRandomCards(initialSet);
      
      // Fetch history from History.ts
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const initialHistory: any = await getHistory(); // Ensure this returns HistoryEntry[]
      
      setHistory(initialHistory); // Assign the fetched history
    };
    fetchCards();
  }, []);
  
  const handleNewSet = async () => {
    const newSet = getRandomUniqueCards(cards, 8);
  
    setRandomCards(newSet);


    // Add new entry to history
    addHistoryEntry(newSet);
    // Update state with the new entry
    setHistory((prevHistory) => [...prevHistory, newSet]); // This should now work
    console.log(history,'history')
    
};



  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className="container flex flex-col justify-between w-screen items-center bg-[url('./images/amandela_taboo_card_game.webp')] bg-cover bg-center h-screen custom:bg-none">
      <nav className="flex justify-between absolute top-0 left-0 w-full">
        <Image src={'/amandela.svg'} alt="Logo" className="px-5" width={98} height={98} />
        <div className="flex justify-center content-center mr-8 mt-3">
          <a href="./about" className="px-5">About</a>
          <a href="./rules">Rules</a>
        </div>
      </nav>

      <section className="flex flex-col justify-center items-center w-[100vw] h-[85vh]">
        <h1 className="mt-16 mb-16 text-2xl font-bold">TABOO</h1>

        <div ref={cardRef}>
          {randomCards.length > 0 ? <Card cards={randomCards} /> : 'Loading...'}
        </div>

        <div className="flex mt-10 space-x-4">
          <button
            onClick={handleNewSet}
            className="bg-[#281b1b] font-bold text-white rounded-[18px] border-solid border w-24 h-[2.5rem] text-sm"
          >
            New Set
          </button>
          <button
            onClick={toggleHistory}
            className="bg-white font-bold text-[#281b1b] rounded-[18px] border-solid border border-black w-24 h-[2.5rem] text-sm"
          >
            {showHistory ? "Hide History" : "History"}
          </button>
        </div>

        {showHistory && (
          <div className="mt-[10.25rem] p-4 bg-white rounded-lg shadow-lg max-h-[40rem] overflow-y-auto w-full max-w-[20rem] absolute">
            <div className="flex justify-between content-center">
              <h2 className="text-sm font-semibold mb-4 text-[#420607]">Recent Sets</h2>
              <button onClick={toggleHistory} 
                className="bg-[#c82626] font-bold text-white rounded-[100%] border-solid border w-5 h-[20px] text-sm">
                {showHistory ? "X" : ""}
              </button>
            </div>
            <History/>
            <button
              onClick={toggleHistory}
              className="bg-white font-bold text-[#281b1b] rounded-[18px] border-solid border-[2px] w-24 h-[2.5rem] text-sm mx-[100px]"
            >
              {showHistory ? "Hide History" : "History"}
            </button>
          </div>
        )}
      </section>
      <Analytics />
    </div>
  );
}
