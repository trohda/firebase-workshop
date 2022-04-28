import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./db";

const Register = ({ setIsAuth }) => {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
  };

  const handlerRegister = (e) => {
    register(emailInput, passwordInput);
    e.preventDefault();
    setEmailInput("");
    setPasswordInput("");
  };

  const loginUser = async (email, password) => {
    const response = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then((response) => {
      console.log("login", response, response.user);
      setEmailInput("");
      setPasswordInput("");
    });
    setIsAuth(response.user);
  };

  const handlerLogIn = (e) => {
    loginUser(emailInput, passwordInput);
    e.preventDefault();
  };

  return (
    <form>
      <label htmlFor="email">E-mail: </label>
      <input
        id="email"
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <br />
      <label htmlFor="pswd">Password: </label>
      <input
        id="pswd"
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <br />
      <button onClick={(e) => handlerRegister(e)}>Register</button>
      <button onClick={(e) => handlerLogIn(e)}>Sing in</button>
    </form>
  );
};

export default Register;
