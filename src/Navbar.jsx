import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Navbar=()=>{

return(

    <>
        <ul>
        <li><NavLink activeClassName="active_class" to='/about' >AboutUs</NavLink > </li>&nbsp;
        <li><NavLink exact to='/contact'>ContactUs</NavLink ></li> &nbsp;
        <li><NavLink  to='/contact/myname'>ContactUs1</NavLink ></li> &nbsp;
        <li><NavLink  to='/user/ryan/harris'>User</NavLink ></li> 
        <li><NavLink  to='/search' >Search</NavLink > </li>
</ul>
  </>
)
}
export default Navbar;