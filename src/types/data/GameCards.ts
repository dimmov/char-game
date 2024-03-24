import { Collection } from "../utils/utils";
import { User } from "./Users";

export type SingleGame = {
  id: string;
  maxPoints: number;
  name: string;
  upperCase: {
    start: number;
    end: number;
  };
  lowerCase: {
    start: number;
    end: number;
  };
  lastWinnerId: string | null;
  winners: User["id"][];
};

export type GamesData = Collection<SingleGame>;
