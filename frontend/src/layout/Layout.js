import React from "react";
import HeaderComponent from "../component/Header";
import FooterComponent from "../component/Footer";
import { Layout, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Row
      justify="center"
      style={{
        width: "100%",
        flex: 1,
      }}
    >
      <Col
        xs={24} // Full width on small screens
        sm={22} // Take up 22 columns on small screens
        md={20} // Take up 18 columns on medium screens
        lg={18} // Take up 16 columns on large screens
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          {/* Header */}
          <Header style={{ backgroundColor: "#00000000" }}>
            <HeaderComponent />
          </Header>

          {/* Content */}
          <Content
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {children}
          </Content>

          {/* Footer */}
          <Footer style={{ textAlign: "center" }}>
            <FooterComponent />
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default MainLayout;
