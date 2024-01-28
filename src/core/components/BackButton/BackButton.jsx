import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './backButton.scss';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="back-button">
        <Icon iconName={'back'} /> <span>Volver</span>
      </button>
    </>
  );
};

export default BackButton;
