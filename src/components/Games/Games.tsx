import { useContext } from "react";
import { GamesContext } from "../../store/games-context";
import GameCard from "../GameCard/GameCard";
import { UsersContext } from "../../store/users-context";
import { getRandomUserId } from "../../data/utils";

export default function Games() {
  const { games } = useContext(GamesContext);
  const { users } = useContext(UsersContext);

  function startGame(gameId: string) {
    const currentGame = games.find((game) => game.id === gameId);
    const userIDs = users.map((user) => user.id);
    const randomUserId = getRandomUserId(userIDs);
    const user = users.find((user) => user.id === randomUserId);
    console.log(user?.firstName + " won " + currentGame?.name);
  }
  return (
    <>
      <div className="m-4">
        <span className="text-xl leading-3 ml-4">Top Games</span>
      </div>
      <ul>
        {games.map((game) => (
          <GameCard key={game.id} game={game} onStartGame={startGame} />
        ))}
      </ul>
    </>
  );
}
