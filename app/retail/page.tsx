import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "Our Values", description: "Discover the principles that guide every Adsons relationship, order and partnership." };
export default function Retail() { return <SitePage page="retail" />; }
