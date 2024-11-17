"use client";
import Card from "./components/cardComponent";
import { useEffect, useState, useRef } from "react";
import { getHistory, addHistoryEntry } from "./scripts/History"; // Import from History.ts
import History from "./components/history";
import SkeletonCard from "./components/SkeletonCard";
import DropdownMenu from "./components/supportPanel";

type CardType = {
  name: string;
  Words: string[];
  Category:string
};


export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [randomCards, setRandomCards] = useState<CardType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [history, setHistory] = useState<CardType[][]>([]); 
  const [showHistory, setShowHistory] = useState(false);
  const [currentEditCard, setCurrentEditCard]= useState<CardType[]>([])
  const cardRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getCurrentEditedCard(card:any){
    setCurrentEditCard(card)

  }
  const getRandomUniqueCards = (cardsArray: CardType[], numCards: number): CardType[] => {
    const shuffled = [...cardsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numCards);
  };

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('/api/cards', {
        cache:"force-cache" , // Ensures fresh data every time
      });
      
      const data: CardType[] = await response.json();
      setCards(data);

      const initialSet = getRandomUniqueCards(data, 8);
      setRandomCards(initialSet);

      // Fetch history and check if initial set already exists
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const initialHistory: any = await getHistory();
      setHistory(initialHistory);

      // Only add initial set to history if not present
      const isInitialSetInHistory = initialHistory.some(
        (entry:CardType[][]) => JSON.stringify(entry) === JSON.stringify(initialSet)
      );
      if (!isInitialSetInHistory) {
        addHistoryEntry(initialSet);
        setHistory((prevHistory) => [...prevHistory, initialSet]);
      }
    };

    fetchCards();
  }, []);

  const handleNewSet = async () => {
    const newSet = getRandomUniqueCards(cards, 8);
    setRandomCards(newSet);

    // Add new entry to history and update state
    addHistoryEntry(newSet);
    setHistory((prevHistory) => [...prevHistory, newSet]);
  };

  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className="container flex flex-col justify-between w-screen items-center bg-[url('./images/amandela_taboo_card_game.webp')] bg-cover bg-center h-[105vh] custom:bg-none">
    

      <section className="flex flex-col justify-center items-center w-[100vw] h-[85vh] mt-">
        <h1 className="text-sm font-bold">TABOO</h1>
       
        <div ref={cardRef}>
          {randomCards.length > 0 ? <Card cards={randomCards} getCurrentEditedCard= {getCurrentEditedCard} /> : <SkeletonCard/>}
        </div>

        <div className="flex mt-10 space-x-4">
          <button
            onClick={handleNewSet}
            className="bg-[#281b1b] font-bold text-white rounded-[18px] border-solid border w-20 h-[2.0rem] text-sm"
          >
            New Set
          </button>
          <button
            onClick={toggleHistory}
            className="bg-white font-bold text-[#281b1b] rounded-[18px] border-solid border border-black w-20 h-[2.0rem] text-sm"
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
           
          </div>
        )}
      <DropdownMenu currentCard={currentEditCard}/>
      </section>
    
    </div>
  );
}
