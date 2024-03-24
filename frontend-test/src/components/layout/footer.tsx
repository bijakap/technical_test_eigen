import { Layout, Row, Col, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

export const MyFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#fff", color: "black" }}>
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={8}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PhoneOutlined style={{ marginRight: 8 }} />
            <Text>+1234567890</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MailOutlined style={{ marginRight: 8 }} />
            <Text>info@example.com</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            <Text>123 Street Name, City, Country</Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Row justify="center">
            <Col>
              <Text strong style={{ fontSize: 16 }}>
                Quick Links
              </Text>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Services</li>
                <li>FAQ</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Row justify="center">
            <Col>
              <Text strong style={{ fontSize: 16 }}>
                Social Media
              </Text>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};
