import React, { useEffect, useState } from "react";
import GreyBox from "../grey-box/grey-box";

const Timer = () => {
  const [timer, setTimer] = useState("0:00");

  useEffect(() => {});
  return <GreyBox title="Time" content={timer} />;
};

export default Timer;
