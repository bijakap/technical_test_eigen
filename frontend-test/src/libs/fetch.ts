import { NewsCategory } from "../types/category";
import { ENV } from "./env";

export const fetchData = async (
  endpoint: string,
  params: { [key: string]: any } & {
    category?: NewsCategory;
    from?: string | Date;
  }
) => {
  console.log("fetching");
  const url = new URL(endpoint);

  Object.keys(params).forEach((key) => {
    if (key !== "from" && params[key] !== undefined) {
      url.searchParams.append(key, params[key].toString());
    }
  });

  let fromDate: Date;

  if (typeof params.from === "string") {
    fromDate = new Date(params.from);
  } else {
    fromDate = params.from || new Date();
  }

  const fromDateString = fromDate.toISOString();
  url.searchParams.append("from", fromDateString);

  url.searchParams.append("apiKey", ENV.VITE_NEWS_API_KEY);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    return await response.json();
  } catch (error: any) {
    throw new Error("Failed to fetch data: " + error.message);
  }
};
