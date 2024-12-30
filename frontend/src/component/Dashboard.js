import { Card, Row, Col, Button, Typography, List } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const Dashboard = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        padding: '20px',
      }}
    >
      <Col xs={22}>
        <Card
          bordered={false}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            padding: '20px',
            Width: '80%'
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title
                level={2}
                style={{
                  textAlign: 'start',
                  color: '#ba5b38',
                  fontWeight: 'bold',
                }}
              >
                Welcome to the World of Hashing Algorithms!
              </Title>
            </Col>
            <Col span={24}>
              <Text
                style={{
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: 1.8,
                  display: 'block',
                }}
              >
                Hashing is the cornerstone of modern digital security, enabling
                everything from password protection to blockchain technology.
                Every time you log in to a secure website, transfer
                cryptocurrency, or download a software update, hashing
                algorithms are silently at work behind the scenes. But what
                makes hashing so special, and why does it matter so much?
              </Text>
            </Col>
            <Col span={24}>
              <Title level={3} style={{ color: '#ba5b38' }}>
                What is Hashing?
              </Title>
              <Text
                style={{
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: 1.8,
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                At its core, hashing is a process that takes an input of any
                size—be it a single word, a file, or even an entire database—and
                transforms it into a unique, fixed-size value called a "hash."
                This transformation is:
              </Text>
              <List
                bordered
                dataSource={[
                  'Deterministic: The same input will always produce the same hash.',
                  'Fast and Efficient: Ideal for real-time data processing.',
                  'Irreversible: You can’t deduce the original input from the hash, ensuring security.',
                  'Unique: Even the smallest change in input results in a completely different hash (avalanche effect).',
                ]}
                renderItem={(item) => (
                  <List.Item style={{ backgroundColor: '#F0EEE5', color: '#000000' }}>
                    {item}
                  </List.Item>
                )}
                style={{ marginBottom: '20px', borderRadius: '8px' }}
              />
            </Col>
            <Col span={24}>
              <Title level={3} style={{ color: '#ba5b38' }}>
                Why is Hashing Important?
              </Title>
              <Text
                style={{
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: 1.8,
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                The importance of hashing extends far beyond creating unique
                values. It’s a critical tool in:
              </Text>
              <List
                bordered
                dataSource={[
                  'Data Security: Protecting sensitive information like passwords and personal data.',
                  'Data Integrity: Ensuring files or messages haven’t been tampered with during transmission.',
                  'Authentication: Verifying identities, such as in digital signatures or blockchain transactions.',
                  'Efficient Data Handling: Allowing rapid lookup and comparison in databases and hash tables.',
                ]}
                renderItem={(item) => (
                  <List.Item style={{ backgroundColor: '#F0EEE5', color: '#000000' }}>
                    {item}
                  </List.Item>
                )}
                style={{ marginBottom: '20px', borderRadius: '8px' }}
              />
            </Col>
            <Col span={24} style={{ textAlign: 'end' }}>
              <Button
                href="/algorithm"
                type="primary"
                size="large"
                style={{
                  backgroundColor: '#ba5b38',
                  borderColor: '#ba5b38',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  padding: '8px 32px',
                  borderRadius: '6px',
                }}
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;