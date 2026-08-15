import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "Our Brands", description: "Meet ADSONS and DIGIT, the proprietary brands owned and developed by Adsons." };
export default function Categories() { return <SitePage page="categories" />; }
