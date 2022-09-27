import { useEffect, useReducer } from "react";
import { boardReducer } from "../../reducers/boardReducer";

import Tile from "../tile/tile";

import { BOARD } from "../../enums";
import { GameTile } from "../../types";

import classes from "./board.module.scss";

interface PassedProps {
  size: string;
}

const initialState = {
  moves: 0,
  matches: 0,
  flippedTiles: [],
  tiles: new Map<number, GameTile>(),
};

const Board = () => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  const { tiles, moves, flippedTiles, matches } = state;

  console.log("flipped tiles length: ", flippedTiles.length);

  useEffect(() => {
    if (tiles.size === 0) {
      dispatch({ type: BOARD.FILL_BOARD });
    }

    if (flippedTiles.length === 2) {
      dispatch({ type: BOARD.RECORD_MOVE });
    }
  }, [flippedTiles]);

  const grid = [];

  tiles.forEach((tile) => {
    const { id, matched, flipped, value } = tile;
    grid.push(
      <Tile
        key={id}
        id={id}
        value={value}
        flipped={flipped}
        matched={matched}
        dispatch={dispatch}
      />
    );
  });

  return <div className={classes.grid}>{grid}</div>;
};

export default Board;
