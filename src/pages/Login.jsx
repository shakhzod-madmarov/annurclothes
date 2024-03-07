import "../styles/pages/Login.css";

const Login = () => {
  return (
    <div className="loginPage container">
      <section className="login">
        <h2>Войти</h2>
        <form action="#" className="form">
          <label className="form__label">Адрес электронной почты</label>
          <input
            className="form__input"
            type="email"
            placeholder="Введите e-mail"
          />
          <label className="form__label">Пароль</label>
          <input
            className="form__input"
            type="password"
            placeholder="Введите пароль от аккаунт"
          />
          <button type="submit" className="form__btn">
            Войти
          </button>
        </form>
      </section>
      <section className="registration">
        <h2>Зарегистрироваться</h2>
        <form action="#" className="form">
          <label className="form__label">Фамилия</label>
          <input
            type="text"
            placeholder="Введите свою фамилию"
            className="form__input"
          />
          <label className="form__label">Имя</label>
          <input
            type="text"
            placeholder="Введите своё имя"
            className="form__input"
          />
          <label className="form__label">Адрес электронной почты</label>
          <input
            type="email"
            placeholder="Введите e-mail"
            className="form__input"
            className="form__input"
          />
          <label className="form__label">Пароль</label>
          <input
            type="password"
            placeholder="Введите пароль"
            className="form__input"
          />
          <label className="form__label">Повторите пароль</label>
          <input
            type="password"
            placeholder="Повторите пароль"
            className="form__input"
          />
          <button className="form__btn" type="submit">Зарегистрироваться</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
