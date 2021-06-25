import React, { useState,useEffect } from 'react';

const AuthContext =React.createContext({
    isLoggedIn: false,
    onLogout : () => {},
<<<<<<< HEAD
    onLogin : (email,password) => {}
=======
    onLogin : (email,password)=>{}
>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
});

export const AuthContextProvider = ( props ) =>{
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler= ( ) => { 
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const loginHandler=()=>{
    localStorage.setItem("isLoggedIn", "1");
<<<<<<< HEAD
    setIsLoggedIn(true);
=======
      setIsLoggedIn(true);
>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
  };

  return(
    <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn, 
        onLogout: logoutHandler , 
        onLogin: loginHandler,
       }} 
    >
<<<<<<< HEAD
        {props.children}
    </AuthContext.Provider>
    );
};
=======
        {props.childern}
    </AuthContext.Provider>
    );
};

>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
export default AuthContext; 