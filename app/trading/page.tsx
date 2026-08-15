import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "International Trading", description: "Explore Adsons’ import, export and wholesale distribution approach for cellphone accessories." };
export default function Trading() { return <SitePage page="trading" />; }
