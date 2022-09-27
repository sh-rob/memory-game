import React, { Dispatch } from "react";
import { BOARD } from "../../enums";
import { GameTile } from "../../types";

import classes from "./tile.module.scss";

interface PassedProps {
  id: number;
  value: number;
  matched: boolean;
  flipped: boolean;
  dispatch: Dispatch<{ type: BOARD; payload: GameTile }>;
}

const Tile = ({ id, value, matched, flipped, dispatch }: PassedProps) => {
  const handleTileFlip = () => {
    const gameTile: GameTile = {
      id,
      value,
      matched,
      flipped,
    };
    dispatch({
      type: BOARD.FLIP_TILE,
      payload: gameTile,
    });
  };

  const renderValue = (value: number): number | string => {
    return flipped ? value : "";
  };

  return (
    <button onClick={handleTileFlip} className={classes.container}>
      <h2 className={classes.value}>{renderValue(value)}</h2>
    </button>
  );
};

export default Tile;
