export const siteConfig = {
  name: "ADSONS",
  descriptor: "International Trading",
  establishedYear: "2001",
  signature: "Connecting Businesses. Building Lasting Partnerships.",
  whatsappNumber: "",
  email: "",
  phone: "",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/trading", label: "Trading" },
  { href: "/categories", label: "Brands" },
  { href: "/retail", label: "Values" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const brands = [
  {
    number: "01",
    name: "ADSONS",
    copy: "A proprietary Adsons brand developed around quality, performance and dependable value for international markets.",
  },
  {
    number: "02",
    name: "DIGIT",
    copy: "A proprietary Adsons brand created to respond to evolving customer needs in the global cellphone accessories market.",
  },
];

export const markets = [
  {
    name: "Middle East",
    number: "01",
    copy: "Long-standing trade relationships supported by dependable service and a trusted sourcing network.",
  },
  {
    name: "Africa",
    number: "02",
    copy: "Wholesale partnerships built around product availability, competitive value and reliable distribution.",
  },
  {
    name: "International Markets",
    number: "03",
    copy: "Cross-border sourcing and supply solutions shaped around the needs of wholesalers, distributors and importers.",
  },
];

export const strengths = [
  {
    title: "Global sourcing network",
    copy: "Trusted manufacturer relationships and international sourcing experience support consistent product availability.",
  },
  {
    title: "Import, export & wholesale",
    copy: "Nearly 25 years of focused experience in international cellphone accessories trading and distribution.",
  },
  {
    title: "Reliable supply solutions",
    copy: "An efficient supply chain and dependable logistics help businesses plan and grow with confidence.",
  },
  {
    title: "Partnership-led service",
    copy: "A customer-first approach built on professionalism, integrity and long-term commercial relationships.",
  },
];

export const values = [
  {
    title: "Relationships First",
    copy: "Trust is the starting point, and lasting partnerships are at the heart of everything we do.",
  },
  {
    title: "Customer Success",
    copy: "We understand customer needs, deliver dependable service and help their businesses grow.",
  },
  {
    title: "Quality",
    copy: "We pursue quality, reliability and value so every partnership can move forward with confidence.",
  },
  {
    title: "Global Collaboration",
    copy: "We connect businesses across borders through trusted sourcing, international trade and distribution.",
  },
  {
    title: "Innovation",
    copy: "We adapt to changing technology, evolving customer needs and new global market opportunities.",
  },
  {
    title: "Excellence",
    copy: "Professionalism, continuous improvement and attention to detail guide our work every day.",
  },
];

export function whatsappHref(message: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!number) return "/contact";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
