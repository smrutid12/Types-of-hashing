import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/hash_it_out.png";

const HeaderComponent = () => {
  return (
    <header>
      <Row justify="start" align="middle">
        <Col style={{ padding: "20px"}}>
          <a href="/">
            <img src={logo} height="50" alt="Logo" />
          </a>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderComponent;
