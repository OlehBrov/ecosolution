import { Counter } from "../../components/Counter";

export const ProductionSection = () => {
  return (
    <div className="container production-container">
      <h2 className="section-heading production-heading">
        Electricity we produced for all time
      </h2>
      <div className="counter-section">
        <Counter />
      </div>
      <h2 className="section-heading production-heading">
        The services we provide
      </h2>
      <div className="services-wrap">
        <div className="description-wrap">
          <p className="services-description">
            Development and implementation of renewable enviroMentally friendly
            energy sources
          </p>
        </div>
        <div className="services-nav">
          <ul className="services-list">
            <li className="services-item">
              <a href="#" className="services-item-link">
                Solar
              </a>
            </li>
            <li className="services-item">
              <a href="#" className="services-item-link">
                Wind
              </a>
            </li>
            <li className="services-item">
              <a href="#" className="services-item-link">
                Hydro
              </a>
            </li>
            <li className="services-item">
              <a href="#" className="services-item-link">
                Thermal
              </a>
            </li>
            <li className="services-item">
              <a href="#" className="services-item-link">
                Nuclear
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
