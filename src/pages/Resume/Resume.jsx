import { useContext } from 'react';
import { AuthContext } from '../../core/context/AuthContext';
import { PlanContext } from '../../core/context/PlanContext';
import Icon from '../../core/components/Icon/Icon';
import BackButton from '../../core/components/BackButton/BackButton';
import Header from './../../core/components/Header/Header';
import Stepper from './../../core/components/Stepper/Stepper';
import './resume.scss';
const Resume = () => {
  const { currentUser } = useContext(AuthContext);
  const { plan } = useContext(PlanContext);

  const fullUser = currentUser.name + ' ' + currentUser.lastName;
  return (
    <>
      <div className="resume">
        <Header />
        <Stepper step={2} />
        <div className="resume-container">
          <BackButton />
          <div className="resume-info">
            <h1>Resumen del seguro </h1>
            <div className="resume-card">
              <div className="resume-card__header">
                <p>Precios calculados para:</p>
                <h3>
                  <Icon iconName={'family'} />
                  {fullUser}
                </h3>
              </div>
              <hr className="divider" />
              <div className="resume-card__body">
                <p>Responsable de pago</p>
                <p>DNI: 444888888</p>
                <p>Celular: 5130216147</p>
              </div>
              <div className="resume-card__body">
                <p>Plan elegido</p>
                <p>{plan.name}</p>
                <p>Costo del Plan: ${plan.price} al mes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
