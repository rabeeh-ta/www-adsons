import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "About", description: "Learn how Adsons has grown since 2001 into an international cellphone accessories trading partner." };
export default function About() { return <SitePage page="about" />; }
