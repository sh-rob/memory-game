import styles from "../styles/App.module.scss";
import StartGame from "./components/start-game/StartGame";

const App = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.memoryTitle}>memory</h2>
      <StartGame />
    </div>
  );
};

export default App;
