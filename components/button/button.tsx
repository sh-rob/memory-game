import React from "react";
import Link from "next/link";
import classNames from "classnames";
import classes from "./Button.module.scss";

type Size = "small" | "medium" | "large";

interface PassedProps {
  children: string;
  variant: string;
  onClick?: () => void;
  pathName?: string;
  size: Size;
}

const Button = ({
  variant,
  onClick,
  pathName,
  children,
  size = "small",
}: PassedProps) => {
  const button = (
    <button
      onClick={onClick}
      className={classNames([classes.rounded], {
        [classes.pickledBlueWood]: variant.includes("pickedBlueWood"),
        [classes.jungleMist]: variant === "jungleMist",
        [classes.squash]: variant === "squash",
        [classes.small]: size === "small",
        [classes.medium]: size === "medium",
        [classes.large]: size === "large",
      })}
    >
      {children}
    </button>
  );

  return pathName ? <Link href={pathName}>{button}</Link> : button;
};

export default Button;
