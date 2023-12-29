import CountUp from "react-countup";

export const Counter = () => {
 
  return (
    <CountUp
      startOnMount={false}
      start={10000000}
      end={1134147814}
      duration="2"
      separator=" "
      enableScrollSpy={true}
      scrollSpyDelay={300}
      scrollSpyOnce={true}
      
      redraw={true}
    >
      {({ countUpRef }) => (
        <div className="counter-wrap">
          <span className="counter" ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};
