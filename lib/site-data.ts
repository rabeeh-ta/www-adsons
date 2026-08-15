export const siteConfig = {
  name: "Adsons",
  descriptor: "Trading & Retail",
  whatsappNumber: "",
  whatsappText:
    "Hello Adsons, I would like to discuss a wholesale electronics requirement.",
  email: "",
  phone: "",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/trading", label: "Trading" },
  { href: "/categories", label: "Categories" },
  { href: "/retail", label: "Retail Network" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const categories = [
  {
    number: "01",
    title: "Charging & Power",
    items: ["Charging solutions", "Portable power", "Power accessories"],
    copy: "Dependable everyday power solutions for fast-moving retail environments.",
  },
  {
    number: "02",
    title: "Cables & Connectivity",
    items: ["Data connectivity", "Adapters", "Everyday cables"],
    copy: "Practical connectivity essentials selected for broad market demand.",
  },
  {
    number: "03",
    title: "Audio Accessories",
    items: ["Personal audio", "Portable audio", "Audio essentials"],
    copy: "Accessible audio categories suited to a wide range of retail channels.",
  },
  {
    number: "04",
    title: "Mobile Utility",
    items: ["Protection", "Mounting", "Daily-use accessories"],
    copy: "High-utility accessories that support the everyday mobile experience.",
  },
  {
    number: "05",
    title: "Computer Peripherals",
    items: ["Input devices", "Desk essentials", "Computer connectivity"],
    copy: "Core peripherals and desk accessories for work, study and everyday use.",
  },
  {
    number: "06",
    title: "Storage & Everyday Tech",
    items: ["Digital storage", "Technology essentials", "Utility electronics"],
    copy: "Selected technology categories aligned with changing customer needs.",
  },
];

export const regions = [
  {
    name: "Africa",
    number: "01",
    copy: "Long-term market perspective shaped by diverse retail and distribution needs.",
  },
  {
    name: "Asia",
    number: "02",
    copy: "Strong commercial networks across one of the world’s most dynamic technology regions.",
  },
  {
    name: "North America",
    number: "03",
    copy: "Responsive trading relationships built around quality, timing and market fit.",
  },
];

export const strengths = [
  {
    title: "Market-aware sourcing",
    copy: "Category decisions informed by real retail demand and changing customer preferences.",
  },
  {
    title: "Relationship-led trading",
    copy: "A practical, responsive approach built for lasting wholesale partnerships.",
  },
  {
    title: "Retail-grounded insight",
    copy: "Three shops keep Adsons connected to what customers need in the real world.",
  },
  {
    title: "International perspective",
    copy: "Experience navigating different markets, commercial expectations and product needs.",
  },
];

export function whatsappHref(message = siteConfig.whatsappText) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const path = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${path}?text=${encodeURIComponent(message)}`;
}
