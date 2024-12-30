import { Col, Row, Image } from "antd";
import React from "react";
import logo from "../assets/smruti.png";
import { HeartFilled } from "@ant-design/icons";

const FooterComponent = () => {
  return (
    <footer>
      <Row justify="end" align="middle" style={{ padding: "10" }}>
        <Col>
          <h4>
            With Love <HeartFilled style={{ color: "#ba5b38" }} /> By
          </h4>
        </Col>
        <Col style={{ marginRight: "20px" }}>
          <a
            href="https://www.linkedin.com/in/smrutid12/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={logo}
              preview={false}
              height={50}
              style={{ cursor: "pointer" }}
            />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;
