import { GAMES_DATA } from "../data/Games";
import { SingleGame } from "../types/data/GameCards";
import { Collection } from "../types/utils/utils";
import { clientGET } from "../utils/api/methods";

export function fetchGames() {
  return Promise.resolve(GAMES_DATA);

  return clientGET<Collection<SingleGame>>({
    path: "games",
  });
}
