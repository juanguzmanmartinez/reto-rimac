import logoWhite from '../../../assets/images/logo-white.svg';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="" />
      <hr className="divider" />
      <p>© 2023 RIMAC Seguros y Reaseguros.</p>
    </footer>
  );
};

export default Footer;
