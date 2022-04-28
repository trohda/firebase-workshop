import { signOut } from "firebase/auth";
import { auth } from "./db";

const Logged = ({ isAuth, setIsAuth }) => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Wylogowano poprawnie");
      })
      .catch((error) => {
        console.log("Coś poszło nie tak :(");
      });
    setIsAuth(false);
  };
  return (
    <>
      <p>Jesteś zalogowany jako: {isAuth} </p>
      <button onClick={logOut}>Wyloguj</button>
      <hr />
    </>
  );
};

export default Logged;
