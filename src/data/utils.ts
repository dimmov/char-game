import { User } from "../types/data/Users";

export function getRandomUserId(participants: User["id"][]): User["id"] {
  const newParticipants = [...participants];
  const randomNumber = Math.floor(Math.random() * newParticipants.length);

  return newParticipants[randomNumber];
}

export function generateAlphabet(start: number, end: number): string[] {
  const characters: string[] = [];
  for (let i = start; i <= end; i++) {
    characters.push(String.fromCharCode(i));
  }
  return characters;
}

export function getRandomElement(source: string[]): string {
  const start = 0;
  const end = source.length;
  return source[getRandomInt(start, end)];
}

export function getRandomCharsWithElement(
  element: string,
  source: string[],
  numChars = 4
): string[] {
  const start = 0;
  const end = source.length;

  if (source.length < numChars) {
    console.error(
      "Error: numChars is greater than the array. Please provide correct values"
    );
    return [];
  }

  const set = new Set<string>(element);

  while (set.size !== numChars) {
    set.add(source[getRandomInt(start, end)]);
  }

  return shuffleArray([...set]);
}

function getRandomInt(max: number, min = 0): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffleArray(array: string[]): string[] {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
