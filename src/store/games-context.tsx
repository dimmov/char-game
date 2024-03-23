import { createContext } from "react";
import { SingleGame } from "../types/data/GameCards";
import { ChildrenProps } from "../types/utils/ChildrenProps";
import useGamesData from "../hooks/useGamesData";

type GamesContextProps = {
  games: SingleGame[];
};

export const GamesContext = createContext<GamesContextProps>({
  games: [],
});

export default function GamesContextProvider({ children }: ChildrenProps) {
  const { games, loading, error } = useGamesData();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  const contextValue = {
    games,
  };
  return (
    <GamesContext.Provider value={contextValue}>
      {children}
    </GamesContext.Provider>
  );
}
