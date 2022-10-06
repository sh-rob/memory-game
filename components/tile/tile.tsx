import React, { Dispatch } from "react";
import { BOARD } from "../../enums";
import { GameTile } from "../../types";

import classnames from "classnames";
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

  return (
    <div onClick={handleTileFlip} className={classes.tile}>
      <div
        className={classnames([classes.innerTile], {
          [classes.flipped]: flipped,
        })}
      >
        <div
          className={classnames([classes.face], {
            [classes.front]: true,
            [classes.matched]: matched,
          })}
        >
          {value}
        </div>
        <div className={classnames([classes.face], { [classes.back]: true })} />
      </div>
    </div>
  );
};

export default Tile;
