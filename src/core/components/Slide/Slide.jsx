import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlanContext } from '../../context/PlanContext';
import Icon from '../Icon/Icon';
import './slide.scss';
const Slide = ({ plan }) => {
  const { selectPlan } = useContext(PlanContext);
  const navigate = useNavigate();
  const handleSelectPlan = () => {
    selectPlan(plan);
    navigate('/resume');
  };

  return (
    <>
      <div className="item-card slide">
        <div className="item-header">
          <div className="item-header__info">
            <h3>{plan.name} </h3>
            <p>Costo del plan</p>
            <p>${plan.price} al mes</p>
          </div>
          <Icon iconName={'homeLight'} />
        </div>
        <hr className="divider" />
        <div className="item-body">
          <ul>
            {plan.description.map((description, i) => (
              <li key={i}>{description}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleSelectPlan} className="button-secondary">
          Seleccionar Plan
        </button>
      </div>
    </>
  );
};

export default Slide;
