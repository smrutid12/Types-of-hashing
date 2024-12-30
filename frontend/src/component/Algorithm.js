import React, { useState } from "react";
import { Tabs, Input, Alert, Typography, Row, Col, message, Card } from "antd";
import { getMD5Hash, getSHAHash, getCryptHash, getBcryptHash } from "../axios";

const { Title, Paragraph } = Typography;

const Algorithm = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [md5Hash, setMd5Hash] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");
  const [cryptHash, setCryptHash] = useState("");
  const [bcryptHash, setBcryptHash] = useState("");

  const handleHashing = async (algorithm) => {
    if (input.trim()) {
      setLoading(true);
      try {
        let response;
        switch (algorithm) {
          case "md5":
            response = await getMD5Hash(input);
            md5_res = response?.data?.md5_hash;
            setMd5Hash(md5_res);
            break;
          case "sha":
            response = await getSHAHash(input);
            sha_res = response?.data?.sha256_hash;
            setSha256Hash(sha_res);
            break;
          case "crypt":
            response = await getCryptHash(input);
            crypt_res = response?.data?.crypt_hash;
            setCryptHash(crypt_res);
            break;
          case "bcrypt":
            response = await getBcryptHash(input);
            bcrypt_res = response?.data?.bcrypt_hash;
            setBcryptHash(bcrypt_res);
            break;
          default:
            message.error("Unknown algorithm");
            return;
        }
      } catch (error) {
        message.error("Error generating hash");
      } finally {
        setLoading(false);
      }
    } else {
      setOutput("Please enter an input value.");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        padding: "20px",
      }}
    >
      <Col xs={22}>
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title
                level={2}
                style={{
                  textAlign: "start",
                  color: "#ba5b38",
                  fontWeight: "bold",
                }}
              >
                Learn How Hashing Algorithms Work
              </Title>
              <Paragraph
                style={{
                  fontSize: "16px",
                  color: "#000000",
                  lineHeight: 1.8,
                  display: "block",
                }}
              >
                Hashing is a process of converting any input (e.g., text) into a
                fixed-length output (hash). It's commonly used for password
                storage and data integrity.
              </Paragraph>
            </Col>
            <Col span={24}>
              <Tabs defaultActiveKey="1" style={{ width: "100%" }}>
                <Tabs tab="MD5" key="1">
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    MD5 is an older algorithm, fast but vulnerable to collision
                    attacks.
                  </Paragraph>
                  <Alert
                    message="Warning: MD5 is deprecated for security-critical applications!"
                    type="warning"
                  />
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text for MD5 hashing"
                  />
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    MD5 Hash: {md5Hash}
                  </Paragraph>
                </Tabs>
                <Tabs tab="SHA-256" key="2">
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    SHA-256 is a secure and widely used hashing algorithm,
                    resistant to collisions.
                  </Paragraph>
                  <Input
                    value={input}
                    onChange={handleHashing}
                    placeholder="Enter text for SHA-256 hashing"
                  />
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    SHA-256 Hash: {sha256Hash}
                  </Paragraph>
                </Tabs>
                <Tabs tab="CRYPT" key="3">
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    CRYPT is used for password hashing, but is considered less
                    secure than bcrypt.
                  </Paragraph>
                  <Input
                    value={input}
                    onChange={handleHashing}
                    placeholder="Enter text for CRYPT hashing"
                  />
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    CRYPT Hash: {cryptHash}
                  </Paragraph>
                </Tabs>
                <Tabs tab="BCRYPT" key="4">
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    Bcrypt is the most secure and recommended algorithm for
                    password hashing.
                  </Paragraph>
                  <Input
                    value={input}
                    onChange={handleHashing}
                    placeholder="Enter text for BCRYPT hashing"
                  />
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.8,
                      display: "block",
                      marginTop: "16px",
                    }}
                  >
                    BCRYPT Hash: {bcryptHash}
                  </Paragraph>
                  <Alert
                    message="Bcrypt is the most secure and recommended algorithm!"
                    type="success"
                  />
                </Tabs>
              </Tabs>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Algorithm;
