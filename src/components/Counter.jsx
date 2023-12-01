import { useRef } from "react";
import CountUp from "react-countup";

export const Counter = () => {
  const countUpRef = useRef(null);

  return (
    <CountUp
      ref={countUpRef}
      startOnMount={false}
      start={100000}
      end={1134147814}
      duration={2.75}
      separator=" "
      enableScrollSpy={true}
      scrollSpyDelay={300}
      scrollSpyOnce={true}
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef, start }) => (
        <div className="counter-wrap">
          <span className="counter" ref={countUpRef} />
          {/* <button onClick={start}>Start</button> */}
        </div>
      )}
    </CountUp>
  );
};
