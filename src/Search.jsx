import React, { useState } from 'react';
import Sresult from './Sresult';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Search=()=>{

   const [img,setImg] =useState()

const inputChange=(event)=>{

const val= event.target.value

console.log(val)
setImg(val);
}

return(
<>
<input type="search" placeholder="search anything" vlaue={img} onChange={inputChange} className="form-control" />
<br/>
<button className="btn btn-primary">Hello</button>
<div>

    {img === "" ? null: <Sresult name={img}/>}

</div>
</>
)

}



export default Search;