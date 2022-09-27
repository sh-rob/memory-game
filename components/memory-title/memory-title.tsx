import classes from "./memory-title.module.scss";
import classNames from "classnames";

interface PassedProps {
  color: string;
}
const MemoryTitle = ({ color }: PassedProps) => {
  return (
    <h2
      className={classNames([classes.memoryTitle], {
        [classes.dark]: color === "dark",
        [classes.soapstone]: color === "soapstone",
      })}
    >
      memory
    </h2>
  );
};

export default MemoryTitle;
