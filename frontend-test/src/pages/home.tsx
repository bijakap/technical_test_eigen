import { Col, Divider, Row } from "antd";
import { CarouselItem } from "../components/carousel/carouselItem";
import { CarouselComp } from "../components/carousel";
import { NewsCard } from "../components/card";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../libs/fetch";
import { ENV } from "../libs/env";

export const Home = () => {
  const [searchParams, _] = useSearchParams();
  const myParam = searchParams.get("kategori");

  const [headlineData, setHeadlineData] = useState([]);
  const [everythingData, seteverythingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        setLoading(true);

        // Fetch headline data
        const headlineQueryParams: Record<string, string> = {};
        if (myParam) {
          headlineQueryParams["category"] = myParam;
        }
        const headlineData = await fetchData(ENV.VITE_ENDPOINT_HEADLINE, {
          ...headlineQueryParams,
          pageSize: 9,
          language: "en",
        });

        // Fetch everything data
        const twoDayAgo = new Date(
          new Date().setDate(new Date().getDate() - 2)
        );
        const everythingData = await fetchData(ENV.VITE_ENDPOINT_EVERYTHING, {
          sources: "ign,wired,buzzfeed",
          sortBy: "popularity",
          language: "en",
          from: twoDayAgo.toISOString(),
          to: new Date().toISOString(),
          pageSize: 8,
        });

        // Set both data
        setHeadlineData(headlineData.articles);
        seteverythingData(everythingData.articles);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  // update when change kategory
  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        setLoading(true);
        const headlineQueryParams: Record<string, string> = {};
        if (myParam) {
          headlineQueryParams["category"] = myParam;
        }
        const headlineData = await fetchData(ENV.VITE_ENDPOINT_HEADLINE, {
          ...headlineQueryParams,
          pageSize: 9,
          language: "en",
        });
        setHeadlineData(headlineData.articles);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, [searchParams]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          color: "black",
        }}
      >
        Loading...
      </div>
    );
  }

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
        }}
      >
        <Divider orientation="left">
          <p style={{ fontWeight: 600, fontSize: 24 }}>Top Headline</p>
        </Divider>

        <Row gutter={8}>
          <Col xs={24} sm={5} md={6} lg={5} xl={5}>
            <Row gutter={8} style={{ marginBottom: 8 }}>
              <Link to={"/detail"} state={headlineData[5]}>
                <CarouselItem
                  height={"146px"}
                  fontsize={{ title: 14, desription: 12 }}
                  article={headlineData[5]}
                />
              </Link>
            </Row>
            <Row gutter={8}>
              <Link to={"/detail"} state={headlineData[6]}>
                <CarouselItem
                  height={"146px"}
                  fontsize={{ title: 14, desription: 12 }}
                  article={headlineData[6]}
                />
              </Link>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={14} xl={14}>
            <CarouselComp article={headlineData.slice(0, 5)} />
          </Col>
          <Col xs={24} sm={5} md={6} lg={5} xl={5}>
            <Row gutter={8} style={{ marginBottom: 8 }}>
              <Link to={"/detail"} state={headlineData[7]}>
                <CarouselItem
                  height={"146px"}
                  fontsize={{ title: 14, desription: 12 }}
                  article={headlineData[7]}
                />
              </Link>
            </Row>
            <Row gutter={8}>
              <Link to={"/detail"} state={headlineData[8]}>
                <CarouselItem
                  height={"146px"}
                  fontsize={{ title: 14, desription: 12 }}
                  article={headlineData[8]}
                />
              </Link>
            </Row>
          </Col>
        </Row>

        <Divider orientation="left">
          <p style={{ fontWeight: 600, fontSize: 20 }}>Latest News</p>
        </Divider>
        <Row
          gutter={[16, 16]}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {everythingData.map((data, index) => (
            <Col className="gutter-row" key={index}>
              <Link to={"/detail"} state={data}>
                <NewsCard article={data} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
