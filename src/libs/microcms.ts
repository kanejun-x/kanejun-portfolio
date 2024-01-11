import { MICROCMS_SERVICE_DOMEIN, MICROCMS_API_KEY } from "@/constant";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMEIN,
  apiKey: MICROCMS_API_KEY,
});

export type WorkType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  type: string;
  headline: string;
  subHeadline: string;
  description: string;
  mainVisual: {
    url: string;
    height: number;
    width: number;
  };
  devType: string;
  role: string;
  technology: string;
  link: string;
};

export async function listWorksData(): Promise<WorkType[]> {
  const res = await client.get({
    endpoint: "works",
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
  });

  if (!res.contents) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.contents as WorkType[];
}
