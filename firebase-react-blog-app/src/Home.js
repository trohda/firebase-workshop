import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./db";

const Home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlerLogIn = () => {};
  const handlerRegister = async () => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    console.log(user);
  };

  return (
    <>
      <form>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="pswd">Password: </label>
        <input
          id="pswd"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handlerLogIn}>Log In</button>
        <button onClick={handlerRegister}>Register</button>
      </form>
    </>
  );
};

export default Home;
