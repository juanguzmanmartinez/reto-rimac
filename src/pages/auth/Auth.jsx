import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../core/context/AuthContext';
import { useForm } from '../../core/hooks/useForm';
import Header from '../../core/components/Header/Header';
import Footer from '../../core/components/Footer/Footer';
import './auth.scss';

const formValidations = {
  document: [(value) => value.length >= 1, 'El documento es obligatorio.'],
  phone: [(value) => value.length >= 1, 'El telefono es obligatorio.'],
};

const Auth = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formSubmmited, setFormSubmmited] = useState(false);
  const {
    document,
    phone,
    onInputChange,
    documentValid,
    phoneValid,
    isFormValid,
  } = useForm(
    {
      document: '',
      phone: '',
    },
    formValidations
  );
  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmmited(true);

    if (!isFormValid) {
      return;
    } else {
      await login();
      navigate('/plans');
    }
  };

  return (
    <>
      <div className="auth">
        <Header />
        <div className="container">
          <main className="auth-container">
            <section className="auth-image">
              <img src="/images/image 220.png" alt="" />
            </section>
            <section className="auth-main">
              <div className="auth-title">
                <div className="auth-title__text">
                  <span className="tag text-black-700-12">
                    Seguro Salud Flexible
                  </span>
                  <h1>Creado para ti y tu familia</h1>
                </div>
                <div className="auth-title__img">
                  <img src="/images/image 220.png" alt="" />
                </div>
              </div>
              <hr className="divider" />
              <form className="auth-form">
                <p className="text-black-600-16">
                  Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                  nuestra asesoría, 100% online.
                </p>
                <div>
                  <div className="input-form-content">
                    <select name="das" id="">
                      <option value="1">DNI</option>
                      <option value="2">C.E.</option>
                    </select>
                    <input
                      className="input-form"
                      type="number"
                      placeholder="Nro. de documento"
                      name="document"
                      value={document}
                      onChange={onInputChange}
                    />
                  </div>
                  {documentValid && formSubmmited && (
                    <div className="error-message">
                      <p>{documentValid} </p>
                    </div>
                  )}
                </div>
                <div>
                  <input
                    className="input-form"
                    type="number"
                    placeholder="Celular"
                    name="phone"
                    value={phone}
                    onChange={onInputChange}
                  />
                  {phoneValid && formSubmmited && (
                    <div className="error-message">
                      <p>{phoneValid} </p>
                    </div>
                  )}
                </div>

                <div className="auth-form__conditions">
                  <label className="control control-checkbox text-black-400-16">
                    Acepto la Política de Privacidad <input type="checkbox" />
                    <div className="control_indicator"></div>
                  </label>
                  <label className="control control-checkbox text-black-400-16">
                    Acepto la Política Comunicaciones Comerciales
                    <input type="checkbox" />
                    <div className="control_indicator"></div>
                  </label>
                </div>

                <a className="text-black-600-12 terms-conditions" href="">
                  Aplican Términos y Condiciones.
                </a>
                <button onClick={onSubmit} className="button-primary">
                  Cotiza aquí
                </button>
              </form>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Auth;
