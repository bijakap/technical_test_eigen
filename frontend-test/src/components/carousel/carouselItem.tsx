import { CarouselItemProps } from "../../types/carouselItem";

export const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        height: props.height ? props.height : "300px",
        borderRadius: "8px",
        padding: "4% 6%",
        backgroundImage: props.article.urlToImage
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.article.urlToImage})`
          : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/dummy.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        justifyContent: "end",
        width: "100%",
      }}
    >
      <div>
        <p
          style={{
            fontSize: props.fontsize?.desription ? props.fontsize?.title : 24,
            fontWeight: 600,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {props.article.title}
        </p>

        <p
          style={{
            fontSize: props.fontsize?.desription
              ? props.fontsize?.desription
              : 20,
            fontWeight: 400,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {props.article.description}
        </p>
      </div>
    </div>
  );
};
