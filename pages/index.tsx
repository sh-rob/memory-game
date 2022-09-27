import StartGame from "./start-game";
import MemoryTitle from "../components/memory-title/memory-title";
import classes from "../styles/index.module.scss";

const App = () => {
  return (
    <div className={classes.container}>
      <div className={classes.memory}>
        <MemoryTitle color="soapstone" />
      </div>
      <StartGame />
    </div>
  );
};

export default App;
