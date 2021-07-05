import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Country from "./Country";
import Signup from "./Signup";
import Login from "./Login";
import { Home } from "./Home";
import PageNav from "./PageNav";
import PageHead from "./PageHead";
import { auto } from "async";
import DidIt from "./DidIt";
const App = () => {
  const [isAuth, setAuth] = useState(localStorage.getItem("token")); 
 

  return (
    <>
      <Switch>
        {isAuth ? (
          <>
          <div className="row">
            <div className="col-md-2" style={{padding:'0px',height:"100%"  }}>
            <PageNav/> 
            </div>
            <div className="col-md-10" style={{width:'100wh',padding:'0px'  }}>
            <PageHead setAuth={setAuth} />
            <div >
            <Route  path="/country" component={Country }  />
            <Route path="/home" component={Home} />
            <Route path="/didit" component={DidIt} />
            </div>
            </div>
          </div>
          </>
        ) : (
          <>
            <Route exact path="/" component={Login}   />
            <Route exact path="/signup" component={Signup} />
          </>
        )}
      </Switch>
    </>
  );
};
export default App;
