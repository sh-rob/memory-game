import MemoryTitle from "../components/memory-title/memory-title";
import Button from "../components/button/button";
import Board from "../components/board/board";
import Timer from "../components/timer/timer";

import classes from "../styles/game.module.scss";
import GreyBox from "../components/grey-box/grey-box";

const Game = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <MemoryTitle color="dark" />
        <div className={classes.buttons}>
          <Button variant="squash" pathName="/game">
            Restart
          </Button>
          <Button variant="jungleMist" pathName="/">
            New Game
          </Button>
        </div>
      </header>
      <div className={classes.game}>
        <Board />
        <div className={classes.solo}>
          <Timer />
          <GreyBox title="Moves" content={0} />
        </div>
      </div>
    </div>
  );
};

export default Game;
