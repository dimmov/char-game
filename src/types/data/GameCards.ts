import { Collection } from "../utils/utils";
import { User } from "./Users";

export type SingleGame = {
  id: string;
  prize: number;
  name: string;
  lastWinnerId: string | null;
  winners: User["id"][];
};

export type GamesData = Collection<SingleGame>;
