import { Collection } from "../utils/utils";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  points: number;
};

export type Users = Collection<User>;
