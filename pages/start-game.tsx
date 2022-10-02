import { useReducer } from "react";
import { startGameReducer } from "../reducers/startGameReducer";
import { TOGGLE } from "../enums";
import Button from "../components/button/button";

import classes from "../styles/start-game.module.scss";

const StartGame = () => {
  const initialState = {
    theme: {
      numbers: true,
      icons: false,
    },
    players: {
      one: true,
      two: false,
      three: false,
      four: false,
    },
    gridSize: {
      size4x4: true,
      size6x6: false,
    },
  };

  const [state, dispatch] = useReducer(startGameReducer, initialState);

  const { numbers, icons } = state.theme;
  const { one, two, three, four } = state.players;
  const { size4x4, size6x6 } = state.gridSize;

  const renderClassNameConditional = (bool: boolean): string => {
    return bool ? "pickledBlueWood" : "jungleMist";
  };

  return (
    <div className={classes.container}>
      <div className={classes.seperator}>
        <h3 className={classes.header}>Select Theme</h3>
        <div className={classes.buttonGroupTwo}>
          <Button
            size="medium"
            onClick={() => {
              dispatch({ type: TOGGLE.THEME });
            }}
            variant={renderClassNameConditional(numbers)}
          >
            Numbers
          </Button>
          <Button
            size="medium"
            onClick={() => {
              dispatch({ type: TOGGLE.THEME });
            }}
            variant={renderClassNameConditional(icons)}
          >
            Icons
          </Button>
        </div>
      </div>
      <div className={classes.seperator}>
        <h3 className={classes.header}>Number of Players</h3>
        <div className={classes.buttonGroupFour}>
          <Button
            size="small"
            onClick={() => {
              dispatch({ type: TOGGLE.PLAYERS, payload: "one" });
            }}
            variant={renderClassNameConditional(one)}
          >
            1
          </Button>
          <Button
            size="small"
            onClick={() => {
              dispatch({ type: TOGGLE.PLAYERS, payload: "two" });
            }}
            variant={renderClassNameConditional(two)}
          >
            2
          </Button>
          <Button
            size="small"
            onClick={() => {
              dispatch({ type: TOGGLE.PLAYERS, payload: "three" });
            }}
            variant={renderClassNameConditional(three)}
          >
            3
          </Button>
          <Button
            size="small"
            onClick={() => {
              dispatch({ type: TOGGLE.PLAYERS, payload: "four" });
            }}
            variant={renderClassNameConditional(four)}
          >
            4
          </Button>
        </div>
      </div>
      <div className={classes.seperator}>
        <h3 className={classes.header}>Grid Size</h3>
        <div className={classes.buttonGroupTwo}>
          <Button
            size="medium"
            onClick={() => {
              dispatch({ type: TOGGLE.GRID_SIZE });
            }}
            variant={renderClassNameConditional(size4x4)}
          >
            4x4
          </Button>
          <Button
            size="medium"
            onClick={() => {
              dispatch({ type: TOGGLE.GRID_SIZE });
            }}
            variant={renderClassNameConditional(size6x6)}
          >
            6x6
          </Button>
        </div>
      </div>
      <div className={classes.smartGameButton}>
        <Button size="large" variant="squash" pathName="/game">
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default StartGame;
