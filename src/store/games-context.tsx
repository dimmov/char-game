import { createContext, useState } from "react";
import { SingleGame } from "../types/data/GameCards";
import { ChildrenProps } from "../types/utils/ChildrenProps";
import useGamesData from "../hooks/useGamesData";

type GamesContextProps = {
  currentGame: SingleGame | undefined;
  games: SingleGame[];
  setCurrentGame(gameId: string): void;
};

export const GamesContext = createContext<GamesContextProps>({
  currentGame: undefined,
  games: [],
  setCurrentGame: () => {},
});

export default function GamesContextProvider({ children }: ChildrenProps) {
  const [currentGame, setCurrentGame] = useState<SingleGame>();
  const { games, loading, error } = useGamesData();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  function setCurrentGameHandler(gameId: string) {
    setCurrentGame(games.find((g) => g.id === gameId));
  }

  const contextValue = {
    currentGame,
    games,
    setCurrentGame: setCurrentGameHandler,
  };
  return (
    <GamesContext.Provider value={contextValue}>
      {children}
    </GamesContext.Provider>
  );
}
