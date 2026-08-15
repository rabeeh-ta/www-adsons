import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "Product Categories", description: "Explore the broad mobile and computer accessory categories traded by Adsons." };
export default function Categories() { return <SitePage page="categories" />; }
