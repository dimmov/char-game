import { useContext } from "react";
import { GamesContext } from "../../store/games-context";
import GameCard from "../GameCard/GameCard";

export default function Games() {
  const { games, setCurrentGame } = useContext(GamesContext);

  function startGameHandler(gameId: string) {
    setCurrentGame(gameId);
  }
  return (
    <>
      <div className="m-4">
        <span className="text-xl leading-3 ml-4">Top Games</span>
      </div>
      <ul>
        {games.map((game) => (
          <GameCard key={game.id} game={game} onStartGame={startGameHandler} />
        ))}
      </ul>
    </>
  );
}
