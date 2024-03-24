import { Layout } from "antd";
import { Navbar } from "./navbar";
import { MyFooter } from "./footer";
import { Outlet } from "react-router-dom";

export const LayoutComp = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ height: "100%", paddingBottom: "20px" }}>
        {<Outlet />}
      </main>
      <MyFooter />
    </Layout>
  );
};
