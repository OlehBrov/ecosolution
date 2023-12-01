import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../data/faq.json";
import { Cross } from "../../images/Cross";
import { Collapse } from "../../images/Collapse";
import { InTouchBtn } from "../../components/InTouchBtn";

export const FaqSection = () => {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    setFaqData(data);
  }, []);
  const buttonHandler = (data) => {
    console.log("data", data);
  };
  return (
    <div className="container faq-container">
      <div className="grid-wrapper">
        <h2 className="section-heading faq-heading">Frequently Asked Questions</h2>
        <Accordion
          onChange={buttonHandler}
          preExpanded={["001"]}
          allowZeroExpanded={true}
        >
          {faqData.map((el) => (
            <AccordionItem key={el.id} uuid={el.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {el.question}
                  <AccordionItemState>
                    {({ expanded }) => (expanded ? <Collapse /> : <Cross />)}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{el.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="prompt-wrap">
          <p className="prompt-text">
            Didn't find the answer to your question?{" "}
          </p>
          {/* <a href="#" className="contact-btn">Contact Us<span className="circle"></span> </a> */}
          <InTouchBtn />
        </div>
      </div>
    </div>
  );
};
