import React from 'react';
import { ProviderMetrics } from '../../../../../common/ifaces';

const PriceCard: React.FC<ProviderMetrics> = (props) => {
  const { cost, cost_type, name, current } = props;

  return (
    <div id="Price" className={current ? 'current' : ''}>
      <h3>{name}</h3>
      <h4>
        <span className="currency">$</span>
        {cost}
        <span>/ {cost_type}</span>
      </h4>
    </div>
  );
};

export default PriceCard;
