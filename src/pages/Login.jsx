const Login = () => {
  return (
    <div className="container">
      <section className="login">
        <h2>Войти</h2>
        <form action="#" className="login__form">
          <label className="login__form__label">Адрес электронной почты</label>
          <input
            className="login__form__input"
            type="email"
            placeholder="Введите e-mail"
          />
          <label className="login__form__label">Пароль</label>
          <input
            className="login__form__input"
            type="password"
            placeholder="Введите пароль от аккаунт"
          />
          <button type="submit" className="login__form__btn">
            Войти
          </button>
        </form>
      </section>
      <section className="registration">
        <h2>Зарегистрироваться</h2>
        <form action="#" className="registration__form">
          <label>Фамилия</label>
          <input type="text" placeholder="Введите свою фамилию" />
          <label>Имя</label>
          <input type="text" placeholder="Введите своё имя" />
          <label>Адрес электронной почты</label>
          <input type="email" placeholder="Введите e-mail" />
          <label>Пароль</label>
          <input type="password" placeholder="Введите пароль" />
          <label>Повторите пароль</label>
          <input type="password" placeholder="Повторите пароль" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
