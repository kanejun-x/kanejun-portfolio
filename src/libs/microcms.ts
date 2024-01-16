import { MICROCMS_SERVICE_DOMEIN, MICROCMS_API_KEY } from "@/constant";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMEIN,
  apiKey: MICROCMS_API_KEY,
});

export interface ImageType {
  url: string;
  height: number;
  width: number;
}

export interface WorkType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  type: string;
  headline: string;
  subHeadline: string;
  description: string;
  mainVisual: ImageType;
  devType: string;
  role: string;
  technology: string;
  link: string;
}

export interface ItemsType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: [string];
  item: string;
}

export interface AboutMeType {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  title: string;
  siteDescription: string;
  bgImage: ImageType;
  favicon: ImageType;
  introduction: string;
  skills: ItemsType[];
  workExperience: ItemsType[];
  education: ItemsType[];
  certification: ItemsType[];
  language: ItemsType[];
}

export async function listWorksData(): Promise<WorkType[]> {
  const res = await client.get({
    endpoint: "works",
    customRequestInit: {
      cache: "no-store",
    },
  });

  if (!res.contents) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.contents as WorkType[];
}

export async function getAboutMeData(): Promise<AboutMeType> {
  const res = await client.get({
    endpoint: "aboutme",
    customRequestInit: {
      cache: "no-store",
    },
  });

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res as AboutMeType;
}
