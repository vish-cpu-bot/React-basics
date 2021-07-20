import React, { useState, useEffect } from 'react'

const PaginationFooter = (props) => {

const[counter,setCounter]=useState(1)
useEffect(()=>{
const value= props.showPerPage *counter;
// console.log("start Value:" , value-props.showPerPage)
// console.log("End Value:" , value)
props.onPageChange(value-props.showPerPage,value);
},[counter])

// const[pageNumber,setPageNumber]=useState(Math.ceil(props.total/props.showPerPage))

const onButtonClick =(type)=>{
if(type==='prev'){
if(counter === 1){
    setCounter(1)
}else{
    setCounter(counter-1)
}
}else if(type === 'next'){
if(Math.ceil(props.total/props.showPerPage)===counter){
    console.log(Math.ceil(props.total/props.showPerPage))
    setCounter(counter)
}else {
    setCounter(counter +1)
}
}
}

    return (
        <div className="d-flex justify-content-center ">
                <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li className="page-item"><a className="page-link" href="#" onClick={()=>onButtonClick('prev')}>Previous</a></li>
    <li className="page-item"><a className="page-link">1</a></li>
     {/* {
        new Array(Math.ceil(props.total/props.showPerPage)).fill("").map((element,index)=>(
            <li className="page-item"><a className="page-link">{index+1 }</a></li>
        ))
    }        */}
    <li class="page-item"><a class="page-link" href="#" onClick={()=>onButtonClick('next')}>Next</a></li>
  </ul>
</nav>


{/* 
            <button className="btn btn-primary" >Previous</button>
            <button className="btn btn-primary"  >Next</button> */}
        </div>
    )
}

export default PaginationFooter
