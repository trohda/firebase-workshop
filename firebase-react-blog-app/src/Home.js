import { useState } from "react";
import { auth } from "./db";
import Logged from "./Logged";
import BlogsList from "./BlogsList";
import { onAuthStateChanged } from "firebase/auth";
import Register from "./Register";

const Home = () => {
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user.email);
    }
  });

  return (
    <>
      {isAuth && <Logged isAuth={isAuth} setIsAuth={setIsAuth} />}
      {isAuth ? <BlogsList /> : <Register setIsAuth={setIsAuth} />}
    </>
  );
};

export default Home;
