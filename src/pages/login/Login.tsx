import React, { KeyboardEvent, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage } from "src/components/errorMessage/ErrorMessage";
import { useAuth } from "src/hooks/useAuth";
import { useValidation } from "src/hooks/useValidation/useValidation";
import {
  useLazyUserInfoQuery,
  useLoginMutation,
} from "src/services/api/authApi";
import { object, string } from "yup";
import styles from "./Login.module.less";

const Login = () => {
  const auth = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [getUserInfo] = useLazyUserInfoQuery();
  const location = useLocation();
  const navigate = useNavigate();
  let { from: path } = (location.state as { from: string }) || {};

  if (path) {
    path = path.includes("login") ? "/" : path;
  } else {
    path = "/";
  }

  const [validate, messages, reset] = useValidation();

  const keyPressSubmit = (e: KeyboardEvent) =>
    e.key === "Enter" && setTimeout(onSubmit, 0);

  const userSchema = object({
    userName: string().required().min(3).label("Логин"),
    password: string().required().min(5).label("Пароль"),
  });

  const [authMessages, setAuthMessages] = useState([]);

  async function onSubmit() {
    const formData = { userName, password };
    const dataIsValid = await validate(formData, userSchema);

    if (dataIsValid) {
      try {
        await login({ login: userName, password }).unwrap();
        await getUserInfo();
        navigate(`${path}`);
      } catch (err) {
        setAuthMessages(err.data.message);
        console.log(err);
      }
    }

    // await userSchema
    //   .validate({ userName, password }, { abortEarly: false })
    //   .then(async () => {
    //     try {
    //       await login({ login: userName, password }).unwrap();
    //       await getUserInfo();
    //       navigate(`${path}`);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   })
    //   .catch((e) => alert(e.errors.join("\n\r")));
  }

  return !auth.userInfo ? (
    <div className={styles.grid}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={keyPressSubmit}
          maxLength={25}
          placeholder="Логин"
        />
        <input
          className={styles.input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={keyPressSubmit}
          maxLength={25}
          placeholder="Пароль"
        />
        <button
          disabled={isLoading}
          className={styles.button}
          type="button"
          onClick={onSubmit}
        >
          Войти
        </button>
        <ErrorMessage
          errorMessages={messages || [`${authMessages}`]}
          callbackReset={() => reset()}
        />
      </form>
    </div>
  ) : (
    <Navigate to={path} />
  );
};

export default Login;
