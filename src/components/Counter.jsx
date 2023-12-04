import { useEffect, useState } from "react";
import CountUp from "react-countup";

export const Counter = () => {
  const [start, setStart] = useState(10000000);
  const [end, setEnd] = useState(1134147814);
  const [duration, setDuration] = useState(3)
 
  return (
    <CountUp
      startOnMount={false}
      start={start}
      end={end}
      duration={duration}
      separator=" "
      enableScrollSpy={true}
      scrollSpyDelay={300}
      scrollSpyOnce={true}
      
      redraw={true}
    >
      {({ countUpRef, update }) => (
        <div className="counter-wrap">
          <span className="counter" ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};
