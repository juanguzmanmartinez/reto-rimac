import { useState, useContext } from 'react';
import { AuthContext } from './../../core/context/AuthContext';
import { useFetch } from './../../core/hooks/useFetch';
import Header from '../../core/components/Header/Header';
import Icon from '../../core/components/Icon/Icon';
import BackButton from '../../core/components/BackButton/BackButton';
import Carousel from './../../core/components/Carousel/Carousel';
import Slide from '../../core/components/Slide/Slide';
import Stepper from './../../core/components/Stepper/Stepper';
import './plan.scss';

const Plans = () => {
  const { currentUser } = useContext(AuthContext);
  const { plans } = useFetch();

  const [seleccion, setSeleccion] = useState(null);

  const handleSeleccion = (value) => {
    setSeleccion(value);
  };

  const listPlans = plans.map((plan, index) => {
    let { price, name, description } = plan;
    if (seleccion !== 'A') price = price * 0.95;
    return <Slide key={index} plan={{ price, name, description }} />;
  });

  return (
    <>
      <div className="plans">
        <Header />
        <Stepper step={1} />
        <div className="plans-container">
          <BackButton />
          <div className="plans-title">
            <h1>{currentUser.name} ¿Para quién deseas cotizar?</h1>
            <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          <div className="plans-cards">
            <div
              onClick={() => handleSeleccion('A')}
              className={
                seleccion === 'A'
                  ? 'plans-cards__item select'
                  : 'plans-cards__item'
              }
            >
              {seleccion === 'A' ? (
                <Icon innerClass="item-icon-status" iconName={'check'} />
              ) : (
                <Icon innerClass="item-icon-status" iconName={'none'} />
              )}

              <div className="item-header">
                <Icon iconName={'addUser'} />
                <h3>Para mí</h3>
              </div>
              <p>
                Cotiza tu seguro de salud y agrega familiares si así lo deseas.
              </p>
            </div>
            <div
              onClick={() => handleSeleccion('B')}
              className={
                seleccion === 'B'
                  ? 'plans-cards__item select'
                  : 'plans-cards__item'
              }
            >
              {seleccion === 'B' ? (
                <Icon innerClass="item-icon-status" iconName={'check'} />
              ) : (
                <Icon innerClass="item-icon-status" iconName={'none'} />
              )}
              <div className="item-header">
                <Icon iconName={'protectionLight'} />
                <h3>Para alguien más</h3>
              </div>
              <p>
                Realiza una cotización para uno de tus familiares o cualquier
                persona.
              </p>
            </div>
          </div>

          {seleccion !== null && <Carousel>{listPlans}</Carousel>}
        </div>
      </div>
    </>
  );
};

export default Plans;
