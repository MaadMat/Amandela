"use client";
import Image from "next/image";
import Card from "./components/cardComponent";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Analytics } from "@vercel/analytics/react"

type CardType = {
  name: string;
  Words: string[];
};

export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [randomCards, setRandomCards] = useState<CardType[]>([]);
  const cardRef = useRef(null);

  const getRandomUniqueCards = (cardsArray: CardType[], numCards: number): CardType[] => {
    const shuffled = [...cardsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numCards);
  };

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('/api/cards', { cache: 'force-cache' });
      const data: CardType[] = await response.json();
      setCards(data);
      setRandomCards(getRandomUniqueCards(data, 5));
    };
    fetchCards();
  }, []);

  const handleNewSet = () => {
    setRandomCards(getRandomUniqueCards(cards, 5));
  };

  const handleDownload = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const link = document.createElement('a');
        console.log(cardRef.current)
        link.download = 'card.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div className="container flex flex-col justify-between w-screen items-center bg-[url('./images/amandela_taboo_card_game.webp')] bg-cover bg-center h-screen custom:bg-none">
      <nav className="flex justify-between absolute top-0 left-0 w-full">
        <Image src={''} alt="Logo" className="px-5" />
        <div>
        <a href="./about" className=" px-5">About</a>
        <a href="./rules">Rules</a>

        </div>
      </nav>

      <section className="flex flex-col justify-center items-center">
        <h1 className="mt-20 text-3xl font-bold">TABOO</h1>
        <h2 className="text-base mt-1 font-bold mb-4">Card Game</h2>

        <div ref={cardRef}>
          {randomCards.length > 0 ? <Card cards={randomCards} /> : 'loading'}
        </div>

        <div className="flex mt-10 space-x-4">
          <button
            onClick={handleDownload}
            className="bg-white border-[#090404] text-black rounded-[18px] border-solid border w-24 h-[2.5rem] text-sm"
          >
            Download
          </button>
          <button
            onClick={handleNewSet}
            className="bg-[#281b1b] font-bold text-white rounded-[18px] border-solid border w-24 h-[2.5rem] text-sm"
          >
            New Set
          </button>
        </div>
      </section>
      <Analytics />
    </div>
  );
}
