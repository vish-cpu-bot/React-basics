import React, { useState } from 'react';
import { Input } from 'antd';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import { Form } from 'antd';

import { useHistory } from 'react-router';

const Signup = () => {
    const[sign,setSign]=useState({
            fname:'',
            lname:'',
            email:'',
            pass:'',
            cpass:'',
    })
const hist=useHistory();

const submit=()=>{

            let old_value = JSON.parse(localStorage.getItem("data"))

            // console.log("onsubmit",old_value);
            if(old_value){
                old_value.push(sign)
                localStorage.setItem("data",JSON.stringify(old_value))
            }else{
                localStorage.setItem("data",JSON.stringify([sign]));
            }
    setSign({
    fname:'',
    lname:'',
    email:'',
    pass:'',
    cpass:'', 
})
hist.push('/')
}
    return (
        <>
            <div className="container">

                {console.log("signstate", sign)}

                <Card title="Signup" style={{ marginTop: "5%" }}>

                    <Form > 
                        <label style={{ marginTop: "2%" }}>First Name</label> 

                        <Input placeholder="First Name" value={sign.fname} name='fname' onChange={(e) => setSign({...sign,fname:e.target.value})} />

                        <label style={{ marginTop: "2%" }}>Last Name</label>

                        <Input placeholder="Last Name" value={sign.lname} name='lname' onChange={(e) => setSign({...sign,lname:e.target.value})} />

                        <label style={{ marginTop: "2%" }}>Email</label>

                        <Input placeholder="Email" value={sign.email} name='email' onChange={(e) => setSign({...sign,email:e.target.value})} />

                        <label style={{ marginTop: "2%" }}>Password</label>

                        <Input placeholder="Password" name='pass' value={sign.pass} onChange={(e) => setSign({...sign,pass:e.target.value})} />

                        <label style={{ marginTop: "2%" }}>Confirm Password</label>

                        <Input placeholder="Confirm Password" name='cpass' value={sign.cpass} onChange={(e) => setSign({...sign,cpass:e.target.value})} />      

                        <Button type="submit" style={{
                            float: "right",
                            marginTop: "1%"
                        }}onClick={submit} >Submit</Button>
                    </Form>
                </Card>,
            </div>
        </>
    )
}
export default Signup;