
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/antd/dist/antd.css';


import { Input } from 'antd';


const Country =()=>{
    const[data1,setData]=useState();
     const[search,setSearch]=useState(''); 


    useEffect(()=>{
        fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(abc => 
        setData(abc)
        );
    },[]);
 

   

  return ( <div className="wrapper">
    <ul>
     <>
            <div className="row" style={{marginTop: '30px'}}>
              <div className="col-md-3">
              <Input type="text" placeholder="Search Countries ..." onChange={e => setSearch( e.target.value )}/>
              </div>
              <div className="col-md-6" style={{textAlign:'center'}} >
                <h3 ><i>Country Data</i></h3>
              </div>
             
            </div>


       <div style={{padding: "10px"}}>
         <table className="table" >
         <thead>
         <tr>
           <th>Country Name</th>
           <th>Country Code</th>
           <th>Date</th>
        
           <th>NewDeaths</th>
           <th>NewRecovered</th>
         </tr>
           </thead>
           {data1?.Countries.filter((val)=>{
             if(search==""){
               return val;
             }else if (val?.Country.toLowerCase().includes(search.toLowerCase())){
         
              return val;
              
             }
           }).map(item => 
           <tbody>  
             <tr> 
             <td>{item.Country}</td>
             <td>{item.CountryCode}</td>
             <td>{item.Date}</td>
             <td>{item.NewDeaths}</td>
             <td>{item.NewRecovered}</td>
           </tr>
           </tbody>
            )}
         </table>  
         </div> 
       
      </>         
     
     { console.log(data1) }       
    </ul>
  </div>)


}

export default Country
