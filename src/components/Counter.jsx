import { useState } from "react";
import CountUp from "react-countup";

export const Counter = () => {
  const [value, setValue] = useState(1134147814)
  

  return (
    <CountUp
      startOnMount={false}
      start={100000}
      end={value}
      duration={2.75}
      separator=" "
      enableScrollSpy={true}
      scrollSpyDelay={300}
      scrollSpyOnce={true}

    >
      {({ countUpRef }) => (
        <div className="counter-wrap">
          <span className="counter" ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};
