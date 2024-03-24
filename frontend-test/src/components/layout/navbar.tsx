import { Flex, Layout, Menu, MenuProps } from "antd";
import { categories } from "../../types/category";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const { Header } = Layout;

const items1: MenuProps["items"] = categories.map((key, index) => ({
  key,
  label: categories[index],
}));

export const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const myParam = searchParams.get("kategori");

  useEffect(() => {
    console.log("Parameter :", myParam);
  }, [myParam]);

  const handleMenuClick = (key: string) => {
    setSearchParams({ kategori: key });
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <a href="/" style={{ width: "auto", textDecoration: "none" }}>
        <Flex align="center" gap={4} style={{ lineHeight: "normal" }}>
          <p
            style={{
              height: "auto",
              padding: "8px 8px",
              borderRadius: "8px",
              backgroundColor: "#242424",
              color: "#ffffff",
              fontWeight: 300,
            }}
          >
            News
          </p>

          <p style={{ fontWeight: 600, color: "black" }}>Portal</p>
        </Flex>
      </a>

      <Menu
        onClick={({ key }) => handleMenuClick(key)}
        mode="horizontal"
        items={items1}
        selectedKeys={[myParam || ""]}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: "flex-end",
          textTransform: "capitalize",
        }}
      />
    </Header>
  );
};
