import { ArticleProps } from "./article";

export type CarouselItemProps = {
  height?: string | number;
  fontsize?: {
    title?: number;
    desription?: number;
  };
  article: ArticleProps;
};
