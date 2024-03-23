import { useEffect, useState } from "react";
import { SingleGame } from "../types/data/GameCards";
import { fetchGames } from "../services/games";
import { AxiosError } from "axios";

export default function useGamesData() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [games, setGames] = useState<SingleGame[]>([]);

  const loadBoards = async () => {
    try {
      const allGames = await fetchGames();
      setGames(allGames.items);
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBoards();
  }, []);

  return {
    loading,
    error,
    games,
  };
}
