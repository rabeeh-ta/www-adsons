import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "Trading & Distribution", description: "Explore Adsons’ relationship-led electronics trading and distribution approach." };
export default function Trading() { return <SitePage page="trading" />; }
