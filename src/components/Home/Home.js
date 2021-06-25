import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
<<<<<<< HEAD
import AuthContext from '../../store/auth-context';
=======
import AuthContext from '../../store/auth-context'
>>>>>>> 075360167d33d55aa8420c47c0015836295c0cc2
const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
