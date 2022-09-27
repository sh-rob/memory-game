import React from "react";
import Link from "next/link";
import classNames from "classnames";
import classes from "./Button.module.scss";

interface PassedProps {
  children: string;
  variant: string;
  onClick?: () => void;
  pathName?: string;
}

const Button = ({ variant, onClick, pathName, children }: PassedProps) => {
  const button = (
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

  if (pathName) {
    return <Link href={pathName}>{button}</Link>;
  }

  return button;
};

export default Button;
