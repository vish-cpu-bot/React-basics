import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { PageHeader, Button, Popover } from "antd";

const PageHead = (props) => {
  const setAuth = props.setAuth;
  const history = useHistory();
  const [visible,setVisible]=useState(false);
  const logout = () => {
    history.push("/");
    setAuth("");
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title="Welcome"
          subTitle="This is a subtitle"
          extra={[
            <Popover
              content={<a href="" onClick={logout}>Log Out</a>}
              title="Options"
              trigger="click"
              visible={visible}
            >
              <Button
                key="1"
                onClick={() => setVisible(true)}
                type="primary"
                icon={<UserOutlined />}
              />
            </Popover>,
          ]}
        />
      </div>
    </>
  );
};

export default PageHead;
