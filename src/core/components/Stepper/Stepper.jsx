import './stepper.scss';
const steps = [
  {
    step: 1,
    label: 'Planes y coberturas',
    completed: false,
  },
  {
    step: 2,
    label: 'Resumen',
    completed: false,
  },
];
const Stepper = ({ step }) => {
  const stepList = steps.map((stepItem) => {
    if (stepItem.step === step) {
      stepItem.completed = true;
    }
    return stepItem;
  });
  return (
    <>
      <div className="stepper">
        <div className="stepper-wrapper">
          <ul>
            {stepList.map((step) => (
              <li key={step.step} className={step.completed ? 'completed' : ''}>
                <div className="stepper-step">
                  <p>{step.step}</p>
                </div>
                <p className="stepper-label">{step.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Stepper;
