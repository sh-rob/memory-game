import { GameTile } from "../types";
import { BOARD } from "../enums";

export type State = {
  moves: number;
  matches: number;
  flippedTiles: GameTile[];
  tiles: Map<number, GameTile>;
};

export type Action =
  | { type: BOARD.FILL_BOARD }
  | { type: BOARD.FLIP_TILE; payload: GameTile }
  | { type: BOARD.RECORD_MOVE }
  | { type: BOARD.RECORD_MATCH };

export const boardReducer = (state: State, action: Action): State => {
  const { moves, matches, flippedTiles, tiles } = state;

  switch (action.type) {
    case BOARD.FILL_BOARD:
      const initial = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
      const shuffled = shuffle(initial);
      const shuffledTiles = fillBoard(shuffled);

      return {
        moves,
        matches,
        flippedTiles,
        tiles: shuffledTiles,
      };
    case BOARD.FLIP_TILE:
      const flippedTile = tiles.get(action.payload.id);

      if (flippedTile && !flippedTile.flipped) {
        flippedTile.flipped = true;
      }

      return {
        tiles,
        moves,
        matches,
        flippedTiles: [...state.flippedTiles, action.payload],
      };

    case BOARD.RECORD_MOVE:
      if (flippedTiles.length === 2) {
        const firstFlippedTile = tiles.get(flippedTiles[0].id);
        const secondFlippedTile = tiles.get(flippedTiles[1].id);

        const flippedTilesDefined = firstFlippedTile && secondFlippedTile;

        if (flippedTilesDefined) {
          if (firstFlippedTile.value === secondFlippedTile.value) {
            firstFlippedTile.matched = true;
            secondFlippedTile.matched = true;
            matches + 1;
          } else {
            firstFlippedTile.flipped = false;
            secondFlippedTile.flipped = false;
          }
        }

        moves + 1;
      }

      return {
        tiles,
        moves,
        matches,
        flippedTiles: [],
      };

    default:
      return {
        tiles,
        moves,
        matches,
        flippedTiles,
      };
  }
};

const shuffle = (array: number[]) => {
  let tmp,
    current,
    top = array.length;

  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }

  return array;
};

const fillBoard = (shuffled: number[]): Map<number, GameTile> => {
  const shuffledTiles: Map<number, GameTile> = new Map();

  for (let i = 0; i < shuffled.length; i++) {
    const gameTile: GameTile = {
      id: i,
      flipped: false,
      matched: false,
      value: shuffled[i],
    };

    shuffledTiles.set(i, gameTile);
  }

  return shuffledTiles;
};
