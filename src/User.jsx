import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom'

// const User=({match})=>{
//     return (<>
//         <h1>Hello how are you {match.params.name}</h1>
//         </>)
// }

const User=()=>{
const {fname,lname}=useParams();
const location=useLocation();
const history = useHistory();
console.log(history)


return (<>
<h1>Hello how are you {fname}  {lname}</h1>
<h3>My Location {location.pathname}</h3>
{location.pathname==='/user/ryan/harris'?<button onClick={()=>{
    history.goBack()
}} >Click me</button>:''}
</>)


}


export default User