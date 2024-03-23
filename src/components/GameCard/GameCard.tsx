import { SingleGame } from "../../types/data/GameCards";
import Button from "../Button/Button";

type Props = {
  game: SingleGame;
  onStartGame(gameId: string): void;
};

export default function GameCard({ game, onStartGame }: Props) {
  return (
    <li className="flex justify-between m-5">
      <div className="border border-blue-500 w-full flex justify-between p-4 rounded-lg">
        <div>{game.name}</div>
        <div>{game.prize}</div>
        <div>Votes</div>
        <div>Timer to next game</div>
        <div>Fee</div>
        <div className="flex flex-col gap-3">
          <Button onClick={() => onStartGame(game.id)}>Play Now</Button>
          <Button>Watch</Button>
        </div>
      </div>
    </li>
  );
}
