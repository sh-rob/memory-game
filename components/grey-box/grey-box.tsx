import { ReactNode } from "react";
import classes from "./grey-box.module.scss";

interface PassedProps {
  title: string;
  content?: number | string;
}

const GreyBox = ({ title, content }: PassedProps) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      {content && <h2 className={classes.content}>{content}</h2>}
    </div>
  );
};

export default GreyBox;
