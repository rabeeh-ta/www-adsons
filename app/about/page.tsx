import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "About", description: "Learn about Adsons’ 20+ year legacy across electronics trading and retail." };
export default function About() { return <SitePage page="about" />; }
