import { Link } from 'react-router-dom';
import logoRed from '../../../assets/images/logo-red.svg';
import Icon from '../Icon/Icon';
import './header.scss';
import '../../../assets/scss/_general.scss';
const Header = () => {
  return (
    <header className="container header">
      <Link to={`/`}>
        <img src={logoRed} alt="" />
      </Link>
      <div className="text-call">
        <p className="text-black-600-12">¡Compra por este medio!</p>
        <a className="text-black-700-16" href="tel:+">
          <Icon iconName={'phone'} />
          (01) 411 6001
        </a>
      </div>
    </header>
  );
};
export default Header;
