import React from 'react';

const Sresult=(props)=>{
const url =`https://source.unsplash.com/user/erondu/600x400/?${props.name}`
return(
<>
    <div>
        <img src={url} alt="My name" />  
    
        
          </div>

</>


)


}


export default Sresult;