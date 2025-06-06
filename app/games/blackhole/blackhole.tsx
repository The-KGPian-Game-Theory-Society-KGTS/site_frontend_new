"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

const BOARD_SIZE = 21;
const INIT_PLAYER_TILES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Triangle layout configuration
const TRIANGLE_ROWS = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20]
];

// Programmatic neighbor calculation for triangle board
const getNeighbors = (index: number): number[] => {
  // Find the row and col of the index
  let row = -1, col = -1;
  for (let r = 0; r < TRIANGLE_ROWS.length; r++) {
    const c = TRIANGLE_ROWS[r].indexOf(index);
    if (c !== -1) {
      row = r;
      col = c;
      break;
    }
  }
  if (row === -1 || col === -1) return [];
  const neighbors: number[] = [];
  // Same row, left and right
  if (col > 0) neighbors.push(TRIANGLE_ROWS[row][col - 1]);
  if (col < TRIANGLE_ROWS[row].length - 1) neighbors.push(TRIANGLE_ROWS[row][col + 1]);
  // Row above
  if (row > 0) {
    if (col < TRIANGLE_ROWS[row - 1].length) neighbors.push(TRIANGLE_ROWS[row - 1][col]);
    if (col > 0) neighbors.push(TRIANGLE_ROWS[row - 1][col - 1]);
  }
  // Row below
  if (row < TRIANGLE_ROWS.length - 1) {
    neighbors.push(TRIANGLE_ROWS[row + 1][col]);
    if (col + 1 < TRIANGLE_ROWS[row + 1].length) neighbors.push(TRIANGLE_ROWS[row + 1][col + 1]);
  }
  return neighbors;
};

interface Tile {
  value: number;
  player: 1 | 2;
}

interface Score {
  p1: number;
  p2: number;
  winningRing: number;
}

const BlackHoleGame = () => {
  const [board, setBoard] = useState<(Tile | null)[]>(Array(BOARD_SIZE).fill(null));
  const [playerTurn, setPlayerTurn] = useState<1 | 2>(1);
  const [player1NextTile, setPlayer1NextTile] = useState(1);
  const [player2NextTile, setPlayer2NextTile] = useState(1);
  const [ready, setReady] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  // Time management
  const [initialTime, setInitialTime] = useState(3); // default 3 minutes
  const [p1Time, setP1Time] = useState(180); // in seconds
  const [p2Time, setP2Time] = useState(180);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [timeoutWinner, setTimeoutWinner] = useState<1 | 2 | null>(null);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  // Player names
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");

  const getRingDescription = (ring: number): string => {
    switch (ring) {
      case 1: return "first ring";
      case 2: return "second ring";
      case 3: return "third ring";
      case 4: return "fourth ring";
      default: return "final count";
    }
  };

  const isGameOver = player1NextTile > 10 && player2NextTile > 10;

  // Timer effect: handles countdown and timeout logic robustly
  useEffect(() => {
    if (!gameStarted || timeoutWinner || isGameOver) {
      if (timerInterval) clearInterval(timerInterval);
      return;
    }
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      if (timeoutWinner || isGameOver) {
        clearInterval(interval);
        return;
      }
      if (playerTurn === 1) {
        setP1Time((t) => {
          if (t <= 1) {
            setTimeoutWinner(2);
            clearInterval(interval);
            return 0;
          }
          return t - 1;
        });
      } else {
        setP2Time((t) => {
          if (t <= 1) {
            setTimeoutWinner(1);
            clearInterval(interval);
            return 0;
          }
          return t - 1;
        });
      }
    }, 1000);
    setTimerInterval(interval);
    return () => clearInterval(interval);
  }, [gameStarted, playerTurn, timeoutWinner, isGameOver]);

  useEffect(() => {
    if (!gameStarted) {
      setP1Time(initialTime * 60);
      setP2Time(initialTime * 60);
    }
  }, [initialTime, gameStarted]);

  const resetGame = () => {
    if (timerInterval) clearInterval(timerInterval);
    setBoard(Array(BOARD_SIZE).fill(null));
    setPlayer1NextTile(1);
    setPlayer2NextTile(1);
    setPlayerTurn(1);
    setGameStarted(!gameStarted);
    setTimeoutWinner(null);
    setP1Time(initialTime * 60);
    setP2Time(initialTime * 60);
  };

  const startGame = () => {
    setReady(true);
  };

  const placeTile = (index: number) => {
    if (timeoutWinner || !gameStarted) return; // Prevent moves after timeout or game end
    if (board[index] !== null) return;
    const currentTile = playerTurn === 1 ? player1NextTile : player2NextTile;
    if (currentTile > 10) return;
    const newBoard = [...board];
    newBoard[index] = { value: currentTile, player: playerTurn };
    setBoard(newBoard);
    if (playerTurn === 1) {
      setPlayer1NextTile(currentTile + 1);
    } else {
      setPlayer2NextTile(currentTile + 1);
    }
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
  };

  const findBlackHole = (): number | null => {
    if (!isGameOver) return null;
    return board.findIndex(tile => tile === null);
  };

  // Get all tiles at a specific ring (expanding shell from the black hole)
  const getTilesAtDistance = (blackHoleIndex: number, distance: number): number[] => {
    let currentRing = new Set<number>([blackHoleIndex]);
    let allVisited = new Set<number>([blackHoleIndex]);
    for (let d = 1; d <= distance; d++) {
      const nextRing = new Set<number>();
      for (const idx of currentRing) {
        for (const neighbor of getNeighbors(idx)) {
          if (!allVisited.has(neighbor)) {
            nextRing.add(neighbor);
          }
        }
      }
      // Mark all in this ring as visited
      for (const idx of nextRing) {
        allVisited.add(idx);
      }
      currentRing = nextRing;
    }
    return Array.from(currentRing).sort((a, b) => a - b);
  };

  const calculateScoreForRing = (indices: number[]): { p1: number; p2: number } => {
    let p1 = 0, p2 = 0;
    indices.forEach(i => {
      const tile = board[i];
      if (!tile) return;
      if (tile.player === 1) p1 += tile.value;
      else p2 += tile.value;
    });
    return { p1, p2 };
  };

  const calculateScore = (): Score => {
    const blackHoleIndex = findBlackHole();
    if (blackHoleIndex === null) return { p1: 0, p2: 0, winningRing: 0 };

    // Check each ring independently
    const ringScores: { p1: number; p2: number }[] = [];

    // Calculate scores for each ring (up to 4 rings)
    for (let ring = 1; ring <= 4; ring++) {
      const ringTiles = getTilesAtDistance(blackHoleIndex, ring);
      const scores = calculateScoreForRing(ringTiles);
      ringScores[ring] = scores;

      // If this ring has different scores, we have a winner
      if (scores.p1 !== scores.p2) {
        return {
          p1: scores.p1,
          p2: scores.p2,
          winningRing: ring
        };
      }
    }

    // If we get here, we need to check accumulated scores
    let totalP1 = 0;
    let totalP2 = 0;

    for (let ring = 1; ring <= 4; ring++) {
      if (ringScores[ring]) {
        totalP1 += ringScores[ring].p1;
        totalP2 += ringScores[ring].p2;

        // Check if we have a winner at this accumulated level
        if (totalP1 !== totalP2) {
          return {
            p1: totalP1,
            p2: totalP2,
            winningRing: ring
          };
        }
      }
    }

    // If we get here, all rings are tied
    return {
      p1: totalP1,
      p2: totalP2,
      winningRing: 4
    };
  };

  const blackHoleIndex = findBlackHole();
  const { p1, p2, winningRing } = calculateScore();

  return (
    <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mt-4 mb-6">
        <button
          className="px-4 py-2 bg-red-700 text-cream rounded shadow hover:bg-red-800 transition-colors font-medium"
          onClick={() => setShowHowToPlay(true)}
        >
          How to play
        </button>
      </div>
      {showHowToPlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-black border border-red-600/40 rounded-xl p-4 sm:p-6 md:p-8 max-w-lg w-full text-left relative shadow-2xl">
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-red-400 hover:text-red-200 text-2xl font-bold"
              onClick={() => setShowHowToPlay(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-400">How to Play: Black Hole</h2>
            <ol className="list-decimal list-inside space-y-2 text-cream/90 text-sm sm:text-base">
              <li>
                <b>Objective:</b> Place your tiles so that your total score (sum of your tiles' values) adjacent to the black hole is as low as possible. The player with the lower score wins!
              </li>
              <li>
                <b>Setup:</b> The board is a triangle of 21 spaces. Each player has tiles numbered 1 to 10. One space will be left empty and becomes the black hole at the end.
              </li>
              <li>
                <b>Turns:</b> Players take turns placing their next tile (in order from 1 to 10) on any empty space except the black hole space.
              </li>
              <li>
                <b>Black Hole:</b> The last remaining empty space after all tiles are placed becomes the black hole.
              </li>
              <li>
                <b>Scoring:</b> The black hole "pulls in" all tiles in rings around it. The winner is determined by comparing the sum of each player's tiles in the first ring, then the second, and so on, until there is a difference. If all rings are tied, the total is compared.
              </li>
              <li>
                <b>Timer:</b> Each player has a set amount of time (chosen before the game). Only the current player's timer counts down.
              </li>
              <li>
                <b>Timeout:</b> If a player's timer reaches zero, the other player immediately wins by timeout.
              </li>
            </ol>
            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 bg-red-700 text-cream rounded hover:bg-red-800 transition-colors font-medium"
                onClick={() => setShowHowToPlay(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {!ready ? (
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex flex-col md:flex-row md:gap-x-4 items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <label className="text-cream text-base sm:text-lg">Player 1 Name:</label>
                <input
                  type="text"
                  value={player1Name}
                  onChange={e => setPlayer1Name(e.target.value || "Player 1")}
                  placeholder="Player 1"
                  className="w-48 sm:w-56 px-3 py-2 rounded border border-red-400 bg-black text-cream text-center focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <label className="text-cream text-base sm:text-lg">Player 2 Name:</label>
                <input
                  type="text"
                  value={player2Name}
                  onChange={e => setPlayer2Name(e.target.value || "Player 2")}
                  placeholder="Player 2"
                  className="w-48 sm:w-56 px-3 py-2 rounded border border-red-400 bg-black text-cream text-center focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label className="text-cream text-base sm:text-lg">Set total time per player (minutes):</label>
              <input
                type="number"
                min={1}
                max={30}
                value={initialTime}
                onChange={e => setInitialTime(Number(e.target.value))}
                className="w-20 sm:w-24 px-2 py-1 rounded border border-red-400 bg-black text-cream text-center"
              />
            </div>
          </div>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-red-600/50 text-cream rounded-md font-medium hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start">
            <button
              onClick={resetGame}
              className="px-3 sm:px-4 py-2 bg-red-600/30 text-cream rounded hover:bg-red-600/50 transition-colors text-sm sm:text-base"
              disabled={!!timeoutWinner}
            >
              {gameStarted ? "Restart Game" : "Start Game"}
            </button>
          </div>

          {/* Board and player info row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full mt-4">
            {/* Player 1 on the left/top */}
            <div className="flex-1 flex flex-col items-center sm:items-end">
              <div className={`p-3 sm:p-4 rounded-lg w-28 sm:w-36 text-center ${playerTurn === 1 ? 'bg-red-900/30 border-2 border-red-500' : 'bg-black/30'}`}>
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{player1Name}</h3>
                <div className="text-xs sm:text-sm text-cream/80">Time: {Math.floor(p1Time / 60)}:{(p1Time % 60).toString().padStart(2, '0')}</div>
              </div>
            </div>
            {/* Board in the center */}
            <div className="flex flex-col items-center">
              {TRIANGLE_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 sm:gap-2 justify-center -mt-2 sm:-mt-3">
                  {row.map((cellIndex) => (
                    <motion.div
                      key={cellIndex}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center cursor-pointer
                        transition-all duration-200
                        ${timeoutWinner ? 'opacity-50 pointer-events-none' : ''}
                        ${isGameOver && cellIndex === blackHoleIndex ? 'bg-red-900/50 shadow-[0_0_15px_rgba(255,0,0,0.3)]' :
                          board[cellIndex] ? 'bg-red-500/20' :
                            'bg-red-500/30 hover:bg-red-600/40'}
                        clip-path-hexagon
                      `}
                      onClick={() => !timeoutWinner && placeTile(cellIndex)}
                    >
                      {board[cellIndex] ? (
                        <div className={`text-lg sm:text-xl font-bold ${board[cellIndex]?.player === 1 ? 'text-red-500' : 'text-cream'}`}>
                          {board[cellIndex]?.value}
                        </div>
                      ) : isGameOver && cellIndex === blackHoleIndex ? (
                        <div className="text-red-500 text-center font-bold text-[10px] sm:text-xs">BLACK HOLE</div>
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
            {/* Player 2 on the right/bottom */}
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <div className={`p-3 sm:p-4 rounded-lg w-28 sm:w-36 text-center ${playerTurn === 2 ? 'bg-red-900/30 border-2 border-red-500' : 'bg-black/30'}`}>
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{player2Name}</h3>
                <div className="text-xs sm:text-sm text-cream/80">Time: {Math.floor(p2Time / 60)}:{(p2Time % 60).toString().padStart(2, '0')}</div>
              </div>
            </div>
          </div>

          {timeoutWinner ? (
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-900/20 border border-red-600/30 rounded-lg text-center">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-cream mb-2">Game Over</h2>
              <div className="space-y-1 text-base sm:text-lg">
                <p>{timeoutWinner === 1 ? player1Name : player2Name} wins by timeout!</p>
                <p className="text-lg sm:text-xl font-bold text-red-400 mt-2">{timeoutWinner === 1 ? player1Name : player2Name} is the winner!</p>
              </div>
            </div>
          ) : isGameOver && (
            <>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-900/20 border border-red-600/30 rounded-lg text-center">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-cream mb-2">Game Over</h2>
                <div className="space-y-1 text-base sm:text-lg">
                  <p>{player1Name} Score: <span className="text-red-500">{p1}</span></p>
                  <p>{player2Name} Score: <span className="text-red-500">{p2}</span></p>
                  {p1 !== p2 && (
                    <>
                      <p className="text-xs sm:text-sm text-cream/70 mt-1">
                        Winner determined by {getRingDescription(winningRing)}
                      </p>
                      <p className="text-lg sm:text-xl font-medium mt-2">
                        {p1 < p2 ? `${player1Name} Wins!` : `${player2Name} Wins!`}
                      </p>
                    </>
                  )}
                  {p1 === p2 && (
                    <p className="text-lg sm:text-xl font-medium mt-2 text-red-400">It's a Tie!</p>
                  )}
                  <p className="text-xs sm:text-sm text-cream/70 mt-1">
                    (Lower score wins - further from the black hole)
                  </p>
                </div>
              </div>

              {p1 !== p2 && blackHoleIndex !== null && (
                <div className="mt-4 text-center">
                  <h3 className="text-base sm:text-lg font-medium mb-2">Scoring Rings</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                    {[1, 2, 3, 4].map((ring) => {
                      const ringTiles = getTilesAtDistance(blackHoleIndex, ring);
                      const { p1: ringP1, p2: ringP2 } = calculateScoreForRing(ringTiles);
                      return (
                        <div
                          key={ring}
                          className={`p-2 sm:p-3 rounded-lg border ${ring === winningRing ? 'bg-red-900/30 border-red-500' : 'bg-black/30 border-red-600/20'}`}
                        >
                          <div className="text-xs sm:text-sm font-medium mb-1">{getRingDescription(ring)}</div>
                          <div className="text-[10px] sm:text-xs">P1: {ringP1} | P2: {ringP2}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BlackHoleGame;

