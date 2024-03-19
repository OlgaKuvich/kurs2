import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { registerUser } from "../../api";
import { useUser } from "../../hooks/useUser";
import "./RegisterPage.css";

export default function RegisterPage() {
  const { loginUser } = useUser;
  const registerForm = {
    login: "",
    name: "",
    password: "",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
    setRegisterData({
      ...registerData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const [registerData, setRegisterData] = useState(registerForm);
  const [regBtnLoading, setRegBtnLoading] = useState(false);
  const [regFormError, setRegFormError] = useState(null);

  const handleRegUser = async (e) => {
    try {
      e.preventDefault();
      setRegBtnLoading(true);
      const regUser = await registerUser({
        login: registerData.login,
        name: registerData.name,
        password: registerData.password,
      });
      loginUser(regUser.user);
      alert("Пользователь успешно создан");
    } catch (error) {
      setRegFormError(error.message);
    } finally {
      setRegBtnLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            {regFormError ? (
              <p style={{ color: "red" }}>{regFormError}</p>
            ) : (
              <>
                <div className="modal__ttl">
                  <h2>Регистрация</h2>
                </div>
                <form className="modal__form-login" id="formLogUp" action="#">
                  <input
                    className="modal__input first-name"
                    type="text"
                    name="name"
                    id="first-name"
                    placeholder="Имя"
                    value={registerData.name}
                    onChange={handleInputChange}
                    label="name"
                  />
                  <input
                    className="modal__input-login"
                    type="text"
                    name="login"
                    id="loginReg"
                    placeholder="Эл. почта"
                    value={registerData.login}
                    onChange={handleInputChange}
                    label="login"
                  />
                  <input
                    className="modal__input password-first"
                    type="password"
                    name="password"
                    id="passwordFirst"
                    placeholder="Пароль"
                    value={registerData.password}
                    onChange={handleInputChange}
                    label="password"
                  />
                  <button
                    className="modal__btn-signup-ent _hover01"
                    id="SignUpEnter"
                    onClick={handleRegUser}
                    disabled={regBtnLoading}
                    style={{
                      backgroundColor: regBtnLoading ? "#94A6BE" : "#565EEF",
                    }}
                  >
                    Зарегистрироваться
                  </button>
                  <div className="modal__form-group">
                    <p>
                      Уже есть аккаунт?{" "}
                      <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
