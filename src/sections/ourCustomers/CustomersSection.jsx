import { useEffect, useState } from "react";

import { customersCountHandler } from "../../utils/customersCountHandler";
import { breakpoints } from "../../utils/mediaConstants";

export const CustomersSection = ({ currentScreen }) => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    if (window.screen.width < breakpoints.wSemiMobile) {
      setCustomers(customersCountHandler(2));
    } else setCustomers(customersCountHandler(4));
  }, [currentScreen]);
  return (
    <div id="customers-section"className="container customers-container">
      <h2  className="section-heading customers-heading">our satisfied customers</h2>
      <div className="customers-wrap">
        {customers &&
          customers.map(({ id, title, Elem }) => {
            return (
              <div key={id} className="customer-card">
                <p className="customer-title">{title}</p>
                <Elem />
              </div>
            );
          })}
      </div>
    </div>
  );
};
