import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import "./LoginPage.css";
import { useState } from "react";
import { login } from "../../api";
import { useUser } from "../../hooks/useUser";

export default function LoginPage() {

  const {loginUser} = useUser();
  
  const loginForm = {
    login: ``,
    password: ``,
  };

  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(loginData)
      .then((data) => {
        console.log(data);
        loginUser(data.user);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                value={loginData.login}
                onChange={handleInputChange}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                value={loginData.password}
                onChange={handleInputChange}
                type="text"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <button
                onClick={handleLogin}
                className="modal__btn-enter _hover01"
                id="btnEnter"
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
