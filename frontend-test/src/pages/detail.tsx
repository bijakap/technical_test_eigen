import { Col, Divider, Row } from "antd";
import { NewsCard } from "../components/card";
import { CarouselComp } from "../components/carousel";
import { useLocation, redirect, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../libs/fetch";
import { ENV } from "../libs/env";

export const DetailPage = () => {
  const { state } = useLocation();
  const [headline, setHeadline] = useState([]);
  const [everything, setEverything] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(state);

  useEffect(() => {
    if (!state) {
      redirect("/");
      return;
    }

    const fetchDataAndSetState = async () => {
      try {
        setLoading(true);

        // Fetch headline data
        const headlineData = await fetchData(ENV.VITE_ENDPOINT_HEADLINE, {
          pageSize: 5,
          language: "en",
        });

        // Fetch everything data
        const twoDaysAgo = new Date(
          new Date().setDate(new Date().getDate() - 2)
        );
        const everythingData = await fetchData(ENV.VITE_ENDPOINT_EVERYTHING, {
          sources: "ign,wired,buzzfeed",
          sortBy: "popularity",
          language: "en",
          from: twoDaysAgo.toISOString(),
          to: new Date().toISOString(),
          pageSize: 4,
        });

        // Set both data
        setHeadline(headlineData.articles);
        setEverything(everythingData.articles);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state]);

  return (
    <div
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1280px",
          color: "black",
        }}
      >
        <Divider>News</Divider>
        <Row gutter={16}>
          <Col lg={16} xl={18}>
            {!loading && state && (
              <div style={{ minHeight: "500px", textAlign: "justify" }}>
                <img
                  src={state?.urlToImage || "dummy.jpg"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "300px",
                    objectPosition: "center",
                  }}
                  alt="News Image"
                />
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "gray",
                    padding: "20px 0px",
                  }}
                >
                  {state?.url}
                </p>
                <p style={{ fontSize: 24, fontWeight: 700 }}>{state?.title}</p>
                <p style={{ fontSize: 20, fontWeight: 400 }}>
                  {state?.description}
                </p>
                <p
                  style={{ fontSize: 20, fontWeight: 500, padding: "20px 0px" }}
                >
                  {state?.content}
                </p>
              </div>
            )}
          </Col>
          <Col lg={8} xl={6}>
            <Row
              gutter={[16, 16]}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {!loading &&
                everything.map((data, index) => (
                  <Col key={index}>
                    <Link to={"/detail"} state={data}>
                      <NewsCard article={data} />
                    </Link>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <Divider>
          <p style={{ fontWeight: 600, fontSize: 24 }}>Top Headline News</p>
        </Divider>
        {!loading && <CarouselComp article={headline} />}
      </div>
    </div>
  );
};
