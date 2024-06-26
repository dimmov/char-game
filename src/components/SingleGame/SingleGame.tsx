import { useContext } from "react";
import {
  generateAlphabet,
  getRandomCharsWithElement,
  getRandomElement,
} from "../../data/utils";
import Button from "../Button/Button";
import CharButton from "../CharButton/CharButton";
import CharButtonsGroup from "../CharButtonsGroup/CharButtonsGroup";
import LoadingBar from "../LoadingBar/LoadingBar";
import MainChar from "../MainChar/MainChar";
import { GamesContext } from "../../store/games-context";

export default function SingleGame() {
  const { currentGame } = useContext(GamesContext);
  const uppercaseLetters = generateAlphabet(
    currentGame?.upperCase.start ?? 0,
    currentGame?.upperCase.end ?? 0
  );
  const selected = getRandomElement(uppercaseLetters);
  const options = getRandomCharsWithElement(selected, uppercaseLetters);

  if (!currentGame) {
    return <div>No Game selected</div>;
  }

  return (
    <div className="border border-blue-500 p-2 m-5 rounded-lg">
      <div className="flex items-center justify-center">
        <MainChar char={selected} />
      </div>
      <LoadingBar />
      <CharButtonsGroup>
        {options.map((option) => {
          return <CharButton key={option} value={option} />;
        })}
      </CharButtonsGroup>
      <div>
        <div>Logo</div>
        <h1>You are playing Jackpot 1</h1>
        <p>All about winning</p>
      </div>
      <Button>Play Now</Button>
      <div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          deserunt nobis nisi obcaecati ipsa esse iste, dignissimos iusto
          placeat, consequuntur quidem perspiciatis ratione ullam. Blanditiis
          quasi unde ipsum voluptatem fugit?
        </p>
      </div>
    </div>
  );
}
