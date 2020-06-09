import * as React from "react";
import "./App.css";
import { TodoListItem } from "./TodoListItem";
import { Layout, Avatar, Breadcrumb } from "antd";
import { Typography } from "antd";
import Form from "./form";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

const todo: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write App", complete: false },
];
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Layout style={{ maxWidth: 1000, margin: "auto" }}>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
          <Title style={{ color: "white" }} level={3}>
            Medical Centres
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <MailOutlined />
                    <span>Contact us</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUs" title="Reach us">
                  <Menu.Item key="1">Call: 08146414490</Menu.Item>
                  <Menu.Item key="2">jabaniwu@gmail.com</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 15px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Nearby Medical Centers</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-content"
                style={{ background: "white", padding: 25, minHeight: 450 }}
              >
                <Form />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Medical Centre ©2018 Created by Dickson
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default App;
