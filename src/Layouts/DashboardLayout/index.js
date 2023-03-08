import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import i18next from "i18next";
import React, { memo, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Index = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  let location = useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const [lang, setlang] = useState(localStorage.getItem("lang") || "en")

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  const onLangChange = (e) => {
    localStorage.setItem("lang", e.target.value)
    setlang(e.target.value)
    window.location.reload()
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="py-2">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
        
          defaultSelectedKeys={["/"]}
          onClick={({ key }) => {
            navigate(key);
            setCurrent(key);
          }}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "Home",
            },
            // {
            //   key: '/products',
            //   icon: <VideoCameraOutlined />,
            //   label: 'Products',
            // },
            // {
            //   key: '3',
            //   icon: <UploadOutlined />,
            //   label: 'nav 3',
            // },
          ]}
        />
      </Sider>
      <Layout className="site-layout vh-100">
        <Header
          style={{
            background: colorBgContainer,
            
          }}
          className="px-3 d-flex align-items-center justify-content-between"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <select name="" id="" className="" onChange={onLangChange} value={lang} >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </Header>
        <Content
          style={{
            overflow: "auto",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default memo(Index);
