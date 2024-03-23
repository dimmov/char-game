import { User } from "../types/data/Users";

export function getRandomUserId(participants: User["id"][]): User["id"] {
  const newParticipants = [...participants];
  const randomNumber = Math.floor(Math.random() * newParticipants.length);

  return newParticipants[randomNumber];
}
