import { ReactComponent as Bosch } from "../images/customers/bosch.svg";
import { ReactComponent as Audi } from "../images/customers/audi.svg";
import { ReactComponent as Buh } from "../images/customers/buh.svg";
import { ReactComponent as Dnipro } from "../images/customers/dnipro.svg";

export const customersCountHandler = (count) => {
  const customers = [
    {
      id: `01`,
      title: "Bosch",
      description: "",
      Elem: Bosch,
    },

    {
      id: `03`,
      title: "Zakhidnyi Buh",
      description: "",
      Elem: Buh,
    },    {
      id: `02`,
      title: "Audi",
      description: "",
      Elem: Audi,
    },
    {
      id: `04`,
      title: "Dnipro M",
      description: "",
      Elem: Dnipro,
    },
  ];
  return customers.slice(0, count);

};
