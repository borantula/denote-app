import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";

const getTime = () => dayjs().format("D MMMM dddd | HH:mm");

const DateBar: FC = () => {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, []);
  return (
    <>
      <div>{time}</div>
      <style jsx>{`
        div {
          color: #ff6363;
          text-align: right;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default DateBar;
