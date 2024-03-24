import { Carousel } from "antd";
import { CarouselItem } from "./carouselItem";
import { Link } from "react-router-dom";
import { ArticleProps } from "../../types/article";

export const CarouselComp = ({ article }: { article: ArticleProps[] }) => (
  <Carousel style={{ height: "300px", width: "100%" }} autoplay>
    {article.map((data, index) => (
      // <div key={index} onClick={() => console.log(index)}>
      <Link to="/detail" state={data} key={index}>
        <CarouselItem article={data} />
      </Link>
      // </div>
    ))}
  </Carousel>
);
