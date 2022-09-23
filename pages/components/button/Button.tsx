import classNames from "classnames";
import classes from "./Button.module.scss";

interface PassedProps {
  children: string;
  variant: string;
  onClick: () => void;
}

const Button = ({ children, variant, onClick }: PassedProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames([classes.rounded], {
        [classes.pickledBlueWood]: variant === "pickledBlueWood",
        [classes.jungleMist]: variant === "jungleMist",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
