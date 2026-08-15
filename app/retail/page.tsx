import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "Retail Network", description: "Learn how Adsons’ three-store retail network keeps the business close to customer demand." };
export default function Retail() { return <SitePage page="retail" />; }
