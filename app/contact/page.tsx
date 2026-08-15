import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = { title: "Contact", description: "Start a direct wholesale, retail or partnership conversation with Adsons." };
export default function Contact() { return <SitePage page="contact" />; }
