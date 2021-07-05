import React from 'react';
import {  Route, Switch,Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Mycontact from './Mycontact';
import Navbar from './Navbar';
import Search from './Search';
import User from './User';


const App=()=>{

return(

    <>
            <Navbar/>
            <h3>You Will be happy to use this module </h3>

            <Switch>
            <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route path="/contact/:mycontact" component={Mycontact}></Route>
                <Route path="/user/:fname/:lname" component={User}></Route>
                <Route  path ="/search"component={Search}></Route>  
                < Redirect  to="/" />     
            </Switch>
    </>
)


}



export default App;