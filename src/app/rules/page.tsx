// pages/rules.tsx

import Head from 'next/head';

const RulesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Taboo Game Rules | How to Play Taboo - Fun for All Ages</title>
        <meta
          name="description"
          content="Discover how to play the Taboo card game with our comprehensive guide. Perfect for all ages, learn the rules, setup, and tips for a fun-filled game night."
        />
        <meta
          name="keywords"
          content="Taboo, Taboo rules, how to play Taboo, card game, family games, party games, game night, Taboo game instructions"
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Taboo Card Game Rules</h1>
        <p className="mb-6 italic">
          Welcome to the wonderfully wacky world of Taboo! Get ready to test your quick thinking and vocabulary skills while avoiding the dreaded forbidden words. Whether you&apos;re a seasoned wordsmith or just looking for a fun way to spend an evening, Taboo is the perfect game to get everyone laughing and thinking on their feet.
        </p>

        <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li><a href="#introduction" className="text-blue-600 hover:underline">Introduction</a></li>
          <li><a href="#game-components" className="text-blue-600 hover:underline">Game Components</a></li>
          <li><a href="#objective" className="text-blue-600 hover:underline">Objective</a></li>
          <li><a href="#setup" className="text-blue-600 hover:underline">Setup</a></li>
          <li><a href="#how-to-play" className="text-blue-600 hover:underline">How to Play</a></li>
          <li><a href="#scoring" className="text-blue-600 hover:underline">Scoring</a></li>
          <li><a href="#winning-the-game" className="text-blue-600 hover:underline">Winning the Game</a></li>
          <li><a href="#special-rules" className="text-blue-600 hover:underline">Special Rules</a></li>
          <li><a href="#tips-and-tricks" className="text-blue-600 hover:underline">Tips and Tricks</a></li>
          <li><a href="#faqs" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
        </ol>

        {/* Introduction */}
        <h2 id="introduction" className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-6">
          Taboo is a fast-paced word-guessing game that&apos;s sure to bring a lot of laughter and perhaps a few frustrated groans. The goal is simple: get your team to guess the secret word without using any of the forbidden words listed on the card. Easy, right? Well, it&apos;s a bit trickier than you might think! But don&apos;t worry; we&apos;ll guide you through all the rules so you can jump right into the fun.
        </p>

        {/* Game Components */}
        <h2 id="game-components" className="text-2xl font-bold mb-4">Game Components</h2>
        <p className="mb-4">Before we dive into the nitty-gritty, let&apos;s make sure you have everything you need:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Taboo Cards</strong>: A deck filled with words that will challenge your descriptive prowess.</li>
          <li><strong>Buzzer</strong>: Optional but highly recommended for dramatic effect and to keep things lively.</li>
          <li><strong>Timer</strong>: A sand timer or stopwatch to keep the pressure on.</li>
          <li><strong>Scorepad and Pen</strong>: To keep track of points and perhaps doodle when it&apos;s not your turn.</li>
          <li><strong>Snacks</strong>: Not included but strongly encouraged for optimal fun levels.</li>
        </ul>

        {/* Objective */}
        <h2 id="objective" className="text-2xl font-bold mb-4">Objective</h2>
        <p className="mb-6">
          The objective of Taboo is to have your team correctly guess as many secret words as possible without using any of the forbidden words listed on the card. The team with the most points at the end of the game wins bragging rights and possibly the last slice of pizza.
        </p>

        {/* Setup */}
        <h2 id="setup" className="text-2xl font-bold mb-4">Setup</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li><strong>Divide into Teams</strong>: Split the players into two teams. If you have an odd number of players, feel free to assign someone as the dedicated buzzer presser—it’s a position of great responsibility and power.</li>
          <li><strong>Arrange Seating</strong>: Team members should sit opposite each other. This isn&apos;t musical chairs, but strategic seating can prevent accidental peeking at the cards.</li>
          <li><strong>Shuffle the Cards</strong>: Give the deck a good shuffle. No one likes a predictable game!</li>
          <li><strong>Prepare the Timer and Buzzer</strong>: Place the timer and buzzer within reach of all players. Try not to abuse the buzzer before the game starts—save that enthusiasm for when it counts!</li>
        </ol>

        {/* How to Play */}
        <h2 id="how-to-play" className="text-2xl font-bold mb-4">How to Play</h2>
        <p className="mb-4">
          The game is played in turns, alternating between teams. On each turn, one player from the active team becomes the <strong>Clue-Giver</strong>, and the rest are the <strong>Guessers</strong>.
        </p>

        <h3 className="text-xl font-semibold mb-2">Giving Clues</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Draw a Card</strong>: The Clue-Giver draws a card and tries to get their team to guess the <strong>Secret Word</strong> at the top of the card.</li>
          <li><strong>Avoid Forbidden Words</strong>: Beneath the secret word is a list of words that are strictly off-limits. These are the Taboo words. Do <strong>not</strong> say them, rhyme with them, or spell them out!</li>
          <li><strong>Clue Guidelines</strong>:
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li><strong>Do</strong> use synonyms, antonyms, and creative descriptions.</li>
              <li><strong>Do</strong> use gestures and act out clues if your house rules allow it.</li>
              <li><strong>Do not</strong> use any part of the forbidden words.</li>
              <li><strong>Do not</strong> use sound effects like &quot;starts with&quot; or &quot;sounds like.&quot;</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Guessing Words</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Team Effort</strong>: The Guessers shout out answers as the Clue-Giver provides hints.</li>
          <li><strong>No Penalties for Wrong Guesses</strong>: Feel free to shout whatever comes to mind (as long as it&apos;s family-friendly).</li>
        </ul>

        {/* Scoring */}
        <h2 id="scoring" className="text-2xl font-bold mb-4">Scoring</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Correct Guess</strong>: If the team guesses the secret word correctly, they earn <strong>1 point</strong>.</li>
          <li><strong>Taboo Violation</strong>: If the Clue-Giver says a forbidden word, the opposing team hits the buzzer, and the card is discarded. The opposing team earns <strong>1 point</strong>.</li>
          <li><strong>Passing</strong>: If the Clue-Giver decides to pass on a card, the opposing team earns <strong>1 point</strong>.</li>
        </ul>

        {/* Winning the Game */}
        <h2 id="winning-the-game" className="text-2xl font-bold mb-4">Winning the Game</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Game Duration</strong>: Continue playing rounds until each player has had a chance to be the Clue-Giver, or set a predetermined number of rounds.</li>
          <li><strong>Final Tally</strong>: At the end of the game, tally up the points. The team with the most points wins!</li>
          <li><strong>Tiebreaker</strong>: In the event of a tie, consider a sudden-death round or perhaps a friendly arm-wrestling match (arm-wrestling optional and not recommended after excessive snacking).</li>
        </ul>

        {/* Special Rules */}
        <h2 id="special-rules" className="text-2xl font-bold mb-4">Special Rules</h2>
        <h3 className="text-xl font-semibold mb-2">The Taboo Buzzer</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Purpose</strong>: The buzzer is used by the opposing team to signal a violation.</li>
          <li><strong>When to Buzz</strong>:
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>The Clue-Giver says a forbidden word.</li>
              <li>The Clue-Giver uses gestures that directly mimic the forbidden word (e.g., writing in the air for &quot;pen&quot;).</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Skip Cards</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>House Rules</strong>: Some versions of Taboo include skip cards or allow a certain number of passes.</li>
          <li><strong>Agree Beforehand</strong>: Make sure all players agree on the number of skips allowed before the game starts to prevent any mid-game debates worthy of a courtroom drama.</li>
        </ul>

        {/* Tips and Tricks */}
        <h2 id="tips-and-tricks" className="text-2xl font-bold mb-4">Tips and Tricks</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Think Outside the Box</strong>: Creative clues are the key to victory.</li>
          <li><strong>Know Your Audience</strong>: Tailor your clues to your team&apos;s knowledge and experiences. Inside jokes are fair game!</li>
          <li><strong>Stay Calm Under Pressure</strong>: The timer is ticking, but panic is not your friend.</li>
          <li><strong>Avoid Filler Words</strong>: &quot;Um,&quot; &quot;like,&quot; and &quot;you know&quot; can waste precious seconds.</li>
          <li><strong>Practice Makes Perfect</strong>: The more you play, the better you&apos;ll get. Plus, it&apos;s a great excuse for more game nights.</li>
        </ul>

        {/* FAQs */}
        <h2 id="faqs" className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="mb-6">
          <p className="font-semibold">Q: Can I use abbreviations or acronyms as clues?</p>
          <p className="mb-4">A: If the abbreviation or acronym is not a forbidden word and doesn&apos;t contain any forbidden words, go for it!</p>

          <p className="font-semibold">Q: What if someone accidentally says a forbidden word while guessing?</p>
          <p className="mb-4">A: No penalty. Only the Clue-Giver needs to avoid the forbidden words. Guessers can shout whatever comes to mind (within reason, of course).</p>

          <p className="font-semibold">Q: Can we play without the buzzer?</p>
          <p className="mb-4">A: Absolutely! If you don&apos;t have a buzzer, a simple bell, a clap, or even a dramatic gasp can suffice.</p>

          <p className="font-semibold">Q: Is there an age limit for playing Taboo?</p>
          <p>A: Taboo is suitable for most ages, but younger players might need some assistance. Feel free to adjust the rules or select cards that are appropriate for all players.</p>
        </div>

        {/* Ready to Play */}
        <h2 className="text-2xl font-bold mb-4">Ready to Play?</h2>
        <p className="mb-6">
          Now that you&apos;re equipped with the rules and perhaps a few laughs, it&apos;s time to gather your friends and family for an unforgettable game of Taboo. Remember, the goal is to have fun, so don&apos;t get too hung up on the rules. After all, laughter is the best way to win at any game.
        </p>

        <p className="mb-6">
          Don&apos;t forget to add this rules page as a link on your navigation bar so players can easily find it whenever they need a refresher or want to settle a friendly dispute over the rules.
        </p>

        <p>
          If you have any more questions or need further clarification on the rules, feel free to reach out to us. Happy gaming!
        </p>
      </div>
    </>
  );
};

export default RulesPage;
