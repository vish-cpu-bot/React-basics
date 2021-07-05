import React from 'react';
import { Menu, Button } from 'antd';
import Country from './Country';
import { Home } from './Home';
import {  Route } from "react-router-dom";
import { Link,NavLink } from 'react-router-dom';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';





 const PageNav = () => {
    return (
      <>
      
      <Menu
          mode="inline"
          theme="dark"
          style={{height:'1000vh '}}

        >
          <Menu.Item key="1" icon={<PieChartOutlined />} >
        
       <NavLink activeClassName="active_class" to='/country' >Country</NavLink > 
        

          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />} >
          <NavLink activeClassName="active_class" to='/home' >Home</NavLink > 
          </Menu.Item>     
          <Menu.Item key="3" icon={<PieChartOutlined />} >
          <NavLink activeClassName="active_class" to='/didit' >DidIt</NavLink > 
          </Menu.Item>   





        </Menu>

      </>
    )

    }
export default PageNav
