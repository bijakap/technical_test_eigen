import { Card } from "antd";
import { ArticleProps } from "../../types/article";

const { Meta } = Card;

export const NewsCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card
      bordered={false}
      hoverable
      style={{ width: 300 }}
      styles={{ body: { padding: "6px 4px" } }}
      cover={
        <img
          alt="example"
          src={
            article.urlToImage
              ? article.urlToImage
              : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          }
          style={{
            objectFit: "cover",
            height: 240,
            objectPosition: "100% 0%",
          }}
        />
      }
    >
      <Meta
        title={article.title}
        description={article.description}
        style={{
          padding: "12px 4px",
          height: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        className="clamped-text"
      />
    </Card>
  );
};
