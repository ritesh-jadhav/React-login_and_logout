<<<<<<< HEAD
import React,{useContext} from "react";
=======
import React, { useContext } from "react";
>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext) ;
  return (
<<<<<<< HEAD
    <>
=======
      
    <React.Fragment>
>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
<<<<<<< HEAD
    </>
=======
      </React.Fragment>
    
>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
  );
}
export default App;
