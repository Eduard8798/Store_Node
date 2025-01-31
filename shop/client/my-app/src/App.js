import { BrowserRouter } from 'react-router-dom';
import AppRouter from './componenets/AppRouter.js'
import NavBar from "./componenets/NavBar.js";
import {observer} from "mobx-react";
import {Context} from "./index.js";
import {useContext, useEffect, useState} from "react";
import {check} from "./http/userAPI.js";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data =>{
        user.setUser(true)
        user.setIsAuth(true)
        }).finally(()=> setLoading(false))
    },[])

    if (loading) {
        return <Spinner animation={'grow'}/>
    }
  return (
      <BrowserRouter>
          <NavBar />
        <AppRouter />
      </BrowserRouter>
  );
})

export default App;
