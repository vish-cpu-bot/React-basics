import React, { useState } from 'react';
import { Input } from 'antd';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'antd';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import PageHead from './PageHead';
import PageNav from './PageNav';


const Login = () => {
  const [login, setlogin] = useState({
    loginemail: '',
    loginpass: ''


  });
  const history = useHistory()

  const token = Math.floor(Math.random() * 6) + 1



  const submit = () => {

    let newval = JSON.parse(localStorage.getItem("data"))
    newval.map((item) => {
      if (item.email === login.loginemail && item.pass === login.loginpass) {
       localStorage.setItem("token", token)
      
        if (token) {
        
          history.push('/country')
        }
        else{
          alert("No Authority");
        }
      }
    })




  }

  const gotologin = () => {
    history.push('/signup')

  }


  return (
    
    <>

<div className="container">
      <Card title="Login" style={{ marginTop: "5%" }}>
          <label for="Signup">Email</label>

          <Input placeholder="Email" value={login.loginemail} name='loginemail' onChange={(e) => setlogin({ ...login, loginemail: e.target.value })} />

          <label for="Signup" style={{ marginTop: "5%" }}>Password</label>

          <Input placeholder="password" value={login.loginpass} pass='loginpass' onChange={(e) => setlogin({ ...login, loginpass: e.target.value })} />

          <div style={{ marginTop: "2%" }}>

            <span >Not Registered &nbsp;<a><i onClick={gotologin}>SignUp</i></a></span>

          </div>
          <Button type="primary" style={{
            float: "right",
            marginTop: "1%"
          }} onClick={submit}  >Submit</Button>
        </Card>
      </div>























  

   
    </>
    
  )
}
export default Login