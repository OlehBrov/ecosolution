
import CountUp from "react-countup";

export const Counter = () => {
  
  

  return (
    <CountUp
      startOnMount={false}
      start={100000}
      end={1134147814}
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
