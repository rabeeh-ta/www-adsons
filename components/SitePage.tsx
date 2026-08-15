"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  categories,
  navigation,
  regions,
  siteConfig,
  strengths,
  whatsappHref,
} from "@/lib/site-data";

type Page = "home" | "trading" | "categories" | "retail" | "about" | "contact";

const pagePath: Record<Page, string> = {
  home: "/",
  trading: "/trading",
  categories: "/categories",
  retail: "/retail",
  about: "/about",
  contact: "/contact",
};

const pageHero: Record<Exclude<Page, "home">, { eyebrow: string; title: string; copy: string; image: string }> = {
  trading: {
    eyebrow: "Trading & Distribution",
    title: "Connecting the right categories with the right markets.",
    copy: "Adsons supports wholesale partners with market-aware electronics sourcing and a relationship-led approach to trade.",
    image: "/images/trade.jpg",
  },
  categories: {
    eyebrow: "Product Categories",
    title: "Focused categories. Broader possibilities.",
    copy: "A considered range of mobile and computer accessory categories—shared at the right level for serious trade conversations.",
    image: "/images/technology.jpg",
  },
  retail: {
    eyebrow: "Retail Network",
    title: "Three shops. One direct view of the market.",
    copy: "Our retail presence keeps Adsons close to customers, emerging demand and the everyday realities of selling technology.",
    image: "/images/technology.jpg",
  },
  about: {
    eyebrow: "About Adsons",
    title: "Built over two decades. Moving with every market.",
    copy: "A trading and retail business shaped by experience, relationships and a clear understanding of everyday technology.",
    image: "/images/architecture.jpg",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s discuss what your market needs next.",
    copy: "Tell us where you operate and which categories you are exploring. Our team will continue the conversation directly.",
    image: "/images/trade.jpg",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header({ page }: { page: Page }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Adsons home">
          <span className="mark" aria-hidden="true"><i /></span>
          <span className="wordmark-text">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.descriptor}</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              className={pagePath[page] === item.href ? "active" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href={whatsappHref()} target="_blank" rel="noreferrer">
          Trade enquiry <Arrow />
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link className="wordmark wordmark-footer" href="/">
            <span className="mark" aria-hidden="true"><i /></span>
            <span className="wordmark-text"><strong>Adsons</strong><small>Trading & Retail</small></span>
          </Link>
          <p>Connecting markets with dependable mobile and computer accessory categories.</p>
        </div>
        <div className="footer-nav">
          <div>
            <span>Explore</span>
            {navigation.slice(1, 4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <span>Company</span>
            {navigation.slice(4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <span>Regions</span>
            <p>Africa</p><p>Asia</p><p>North America</p>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Adsons. All rights reserved.</p>
        <p>20+ years of trading and retail experience.</p>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Start a WhatsApp conversation with Adsons"
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.04 3A12.93 12.93 0 0 0 5.08 22.8L3.2 29l6.36-1.82A12.95 12.95 0 1 0 16.04 3Zm0 23.62c-2.1 0-4.15-.62-5.89-1.79l-.42-.25-3.78 1.08 1.12-3.68-.27-.43a10.65 10.65 0 1 1 9.24 5.07Zm5.84-7.98c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.64 9.64 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.26-.74.26-1.38.18-1.51-.08-.14-.29-.22-.61-.38Z"
        />
      </svg>
    </a>
  );
}

function Layout({ page, children }: { page: Page; children: React.ReactNode }) {
  return (
    <>
      <Header page={page} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function CTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta-panel ${compact ? "compact" : ""}`}>
      <div className="container cta-inner">
        <p className="eyebrow light">A conversation is the starting point</p>
        <h2>Tell us what your market is looking for.</h2>
        <p>Share your country, company and category needs. We’ll take the conversation forward directly.</p>
        <a className="button button-light" href={whatsappHref()} target="_blank" rel="noreferrer">
          Start a trade enquiry <Arrow />
        </a>
      </div>
    </section>
  );
}

function InnerHero({ page }: { page: Exclude<Page, "home"> }) {
  const hero = pageHero[page];
  return (
    <section className="inner-hero">
      <img src={hero.image} alt="" />
      <div className="photo-wash" />
      <div className="container inner-hero-content">
        <p className="eyebrow light">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p>{hero.copy}</p>
      </div>
    </section>
  );
}

function CategoryGrid({ limit }: { limit?: number }) {
  return (
    <div className="category-grid">
      {categories.slice(0, limit).map((category) => (
        <article className="category-card" key={category.title}>
          <div className="category-top"><span>{category.number}</span><Arrow /></div>
          <h3>{category.title}</h3>
          <p>{category.copy}</p>
          <ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <Layout page="home">
      <section className="home-hero">
        <img src="/images/architecture.jpg" alt="Reflective modern architecture under a blue sky" />
        <div className="photo-wash" />
        <div className="container hero-content">
          <p className="eyebrow light">Electronics trading & retail · Established legacy</p>
          <h1>Connecting markets.<br />Powering everyday technology.</h1>
          <p className="hero-copy">Adsons connects dependable mobile and computer accessories with wholesale partners across Africa, Asia and North America.</p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappHref()} target="_blank" rel="noreferrer">Start a trade enquiry <Arrow /></a>
            <Link className="text-link light" href="/about">Discover Adsons <Arrow /></Link>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>20+</strong><span>Years of experience</span></div>
          <div><strong>03</strong><span>Retail locations</span></div>
          <div><strong>03</strong><span>Regions served</span></div>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="container intro-grid">
          <p className="eyebrow">What we do</p>
          <div>
            <h2>Experience on the ground.<br />Perspective across markets.</h2>
            <p>For more than two decades, Adsons has worked at the intersection of electronics trading and retail. That combination gives us a practical view of what moves, what lasts and what different markets need.</p>
            <Link className="text-link" href="/trading">Explore our business <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="business-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Our business" title="Two sides of one connected business." copy="International trading gives us reach. Retail keeps us close to real demand." />
          <div className="business-grid">
            <Link href="/trading" className="business-card business-trade">
              <img src="/images/trade.jpg" alt="Container ship travelling through open water" />
              <div className="card-shade" />
              <div><span>01 / Trading & Distribution</span><h3>Moving the right categories across markets.</h3><p>Explore trading <Arrow /></p></div>
            </Link>
            <Link href="/retail" className="business-card business-retail">
              <img src="/images/technology.jpg" alt="Mobile and computer accessories arranged on a desk" />
              <div className="card-shade" />
              <div><span>02 / Retail Network</span><h3>Staying close to customers and demand.</h3><p>Explore retail <Arrow /></p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="categories-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Product categories" title="Everyday technology, considered by category." copy="We present broad category capabilities—not individual products, pricing, brands or stock." />
          <CategoryGrid limit={6} />
          <div className="section-end-link"><Link className="text-link" href="/categories">View all categories <Arrow /></Link></div>
        </div>
      </section>

      <section className="regions-section section-space">
        <div className="container regions-layout">
          <SectionHeading eyebrow="Markets we serve" title="Local understanding. International outlook." copy="We work across distinct regions while keeping every relationship direct and commercially focused." />
          <div className="region-list">
            {regions.map((region) => (
              <article key={region.name}><span>{region.number}</span><h3>{region.name}</h3><p>{region.copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-section">
        <div className="legacy-image"><img src="/images/architecture.jpg" alt="Modern glass architecture reflecting the sky" /></div>
        <div className="legacy-copy">
          <p className="eyebrow">The Adsons perspective</p>
          <h2>Built through continuity, shaped by change.</h2>
          <p>Technology changes quickly. Trust is built slowly. Adsons brings both ideas together—staying responsive to the market while building relationships for the long term.</p>
          <Link className="text-link" href="/about">Our story <Arrow /></Link>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}

function TradingPage() {
  return (
    <Layout page="trading">
      <InnerHero page="trading" />
      <section className="section-space">
        <div className="container intro-grid">
          <p className="eyebrow">Our approach</p>
          <div><h2>Trading with context, not assumptions.</h2><p>Our work begins with the market: who the customer is, how the category moves and what a dependable commercial relationship should look like. From there, Adsons helps connect suitable electronics categories with wholesale opportunities.</p></div>
        </div>
      </section>
      <section className="process-section section-space">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="A clear path from requirement to relationship." />
          <div className="process-grid">
            {[
              ["01", "Understand", "We begin with your market, channel and broad category requirements."],
              ["02", "Align", "We identify the category direction and commercial fit worth discussing."],
              ["03", "Coordinate", "Our team keeps communication direct as requirements develop."],
              ["04", "Grow", "We focus on relationships designed to adapt as markets evolve."],
            ].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="regions-section section-space">
        <div className="container regions-layout">
          <SectionHeading eyebrow="Trading reach" title="Three regions. Different opportunities." copy="Our public website keeps commercial detail private. Serious requirements move into a direct conversation." />
          <div className="region-list">{regions.map((region) => <article key={region.name}><span>{region.number}</span><h3>{region.name}</h3><p>{region.copy}</p></article>)}</div>
        </div>
      </section>
      <section className="strengths-section section-space">
        <div className="container"><SectionHeading eyebrow="Why Adsons" title="Experience that stays useful." /><div className="strength-grid">{strengths.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div>
      </section>
      <CTA />
    </Layout>
  );
}

function CategoriesPage() {
  return (
    <Layout page="categories">
      <InnerHero page="categories" />
      <section className="section-space">
        <div className="container">
          <div className="wide-heading"><SectionHeading eyebrow="Our range" title="Broad enough to respond. Focused enough to understand." copy="These categories are representative and can evolve with the business. Specific products, brands, prices, stock and sourcing details remain private." /></div>
          <CategoryGrid />
        </div>
      </section>
      <section className="privacy-band">
        <div className="container privacy-inner"><span>Private by design</span><h2>Commercial details belong in a conversation, not a public catalogue.</h2><p>We share enough to show where we operate, while protecting the product and sourcing intelligence behind each relationship.</p><a className="text-link light" href={whatsappHref("Hello Adsons, I would like to discuss your product categories for my market.")} target="_blank" rel="noreferrer">Discuss a category <Arrow /></a></div>
      </section>
      <CTA compact />
    </Layout>
  );
}

function RetailPage() {
  return (
    <Layout page="retail">
      <InnerHero page="retail" />
      <section className="section-space">
        <div className="container intro-grid"><p className="eyebrow">Retail at Adsons</p><div><h2>Where market knowledge becomes practical.</h2><p>Retail is more than another part of the business. It gives Adsons a direct view of customer habits, category demand and the day-to-day realities facing electronics sellers.</p></div></div>
      </section>
      <section className="store-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Our locations" title="Three stores, ready to be introduced." copy="Store names, addresses, opening hours and photographs will be added after the owner review." />
          <div className="store-grid">
            {["Store One", "Store Two", "Store Three"].map((store, i) => <article key={store}><div className="store-number">0{i + 1}</div><p>Adsons retail network</p><h3>{store}</h3><span>Location details to be confirmed</span><a href={whatsappHref("Hello Adsons, I would like information about your retail locations.")} target="_blank" rel="noreferrer">Ask on WhatsApp <Arrow /></a></article>)}
          </div>
        </div>
      </section>
      <section className="retail-insight section-space">
        <div className="container split-image-copy"><img src="/images/technology.jpg" alt="Technology accessories in a modern workspace" /><div><p className="eyebrow">A connected advantage</p><h2>Retail insight strengthens every trade conversation.</h2><p>Being close to the customer helps us understand how categories are considered, compared and adopted. That perspective informs a more grounded approach to wholesale trading.</p><Link className="text-link" href="/trading">Explore trading <Arrow /></Link></div></div>
      </section>
      <CTA />
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout page="about">
      <InnerHero page="about" />
      <section className="section-space">
        <div className="container intro-grid"><p className="eyebrow">Our story</p><div><h2>A legacy shaped through electronics, trade and retail.</h2><p>For more than 20 years, Adsons has grown by staying close to the market and committed to its relationships. The business combines international trading experience with the everyday perspective of a three-store retail network.</p><p>That balance helps us think beyond transactions—to understand category relevance, customer demand and the value of dependable long-term partnerships.</p></div></div>
      </section>
      <section className="numbers-band"><div className="container number-grid"><div><strong>20+</strong><span>Years in business</span></div><div><strong>03</strong><span>Retail shops</span></div><div><strong>03</strong><span>International regions</span></div><div><strong>01</strong><span>Connected business</span></div></div></section>
      <section className="section-space values-section">
        <div className="container"><SectionHeading eyebrow="What guides us" title="Professional in approach. Personal in commitment." /><div className="strength-grid">{[
          ["Clarity", "Straightforward conversations and a clear understanding of what each market needs."],
          ["Continuity", "Relationships built to last beyond an individual requirement or transaction."],
          ["Responsiveness", "An ability to adapt as customer demand and technology categories change."],
          ["Perspective", "Commercial decisions informed by experience across trading and retail."],
        ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>
      <section className="legacy-section reverse"><div className="legacy-image"><img src="/images/trade.jpg" alt="Cargo ship representing international trade" /></div><div className="legacy-copy"><p className="eyebrow">Looking forward</p><h2>A mature business with an adaptable outlook.</h2><p>Our legacy gives us confidence, not complacency. Adsons continues to respond to new categories, shifting channels and opportunities across international markets.</p><a className="text-link" href={whatsappHref()} target="_blank" rel="noreferrer">Begin a conversation <Arrow /></a></div></section>
      <CTA />
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout page="contact">
      <InnerHero page="contact" />
      <section className="contact-section section-space">
        <div className="container contact-layout">
          <div><p className="eyebrow">Start here</p><h2>A direct conversation, from the first message.</h2><p>WhatsApp is the fastest way to reach Adsons. Introduce your company, market and the broad category you are interested in, and our team can respond with the right next step.</p></div>
          <div className="contact-card"><span>Primary contact</span><h3>Wholesale & trade enquiries</h3><p>Recommended message details:</p><ul><li>Your name and company</li><li>Country or market</li><li>Category of interest</li><li>Approximate requirement</li></ul><a className="button button-dark" href={whatsappHref()} target="_blank" rel="noreferrer">Continue on WhatsApp <Arrow /></a>{!siteConfig.whatsappNumber && <small>MVP note: connect the official WhatsApp number before launch.</small>}</div>
        </div>
      </section>
      <section className="contact-options section-space"><div className="container"><SectionHeading eyebrow="Other enquiries" title="Choose the right starting point." /><div className="option-grid">{[
        ["Wholesale", "Discuss broad categories and market requirements.", "Hello Adsons, I would like to discuss a wholesale requirement."],
        ["Retail", "Ask about the Adsons retail network and store details.", "Hello Adsons, I would like information about your retail locations."],
        ["Partnerships", "Introduce a relevant supply or business opportunity.", "Hello Adsons, I would like to introduce a business partnership opportunity."],
      ].map(([title, copy, message]) => <article key={title}><h3>{title}</h3><p>{copy}</p><a className="text-link" href={whatsappHref(message)} target="_blank" rel="noreferrer">Start a conversation <Arrow /></a></article>)}</div></div></section>
      <section className="preparation-band"><div className="container"><p className="eyebrow light">Before launch</p><h2>Business contact details and store locations will be confirmed with the owner.</h2></div></section>
    </Layout>
  );
}

export function SitePage({ page }: { page: Page }) {
  if (page === "home") return <HomePage />;
  if (page === "trading") return <TradingPage />;
  if (page === "categories") return <CategoriesPage />;
  if (page === "retail") return <RetailPage />;
  if (page === "about") return <AboutPage />;
  return <ContactPage />;
}
