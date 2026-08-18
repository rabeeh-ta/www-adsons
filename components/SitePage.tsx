"use client";

/* eslint-disable @next/next/no-img-element -- local VINEXT build serves optimized project assets directly */

import { useEffect, useState } from "react";
import {
  brands,
  markets,
  navigation,
  siteConfig,
  strengths,
  values,
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

const pageHero: Record<Exclude<Page, "home">, { eyebrow: string; title: string; copy: string; image: string; alt: string }> = {
  trading: {
    eyebrow: "International Trading",
    title: "Reliable supply. Enduring partnerships.",
    copy: "Adsons connects trusted manufacturers with wholesalers, distributors, retailers and importers across international markets.",
    image: "/images/warehouse.png",
    alt: "Organized consumer electronics accessories warehouse",
  },
  categories: {
    eyebrow: "Our Proprietary Brands",
    title: "Brands built around quality, performance and value.",
    copy: "ADSONS and DIGIT are developed to meet the changing needs of the global cellphone accessories market.",
    image: "/images/technology.jpg",
    alt: "Cellphone and computer accessories in a modern workspace",
  },
  retail: {
    eyebrow: "Our Core Values",
    title: "The principles behind every partnership.",
    copy: "Professionalism, integrity and a customer-first approach guide how Adsons works across borders and over the long term.",
    image: "/images/architecture.jpg",
    alt: "Modern glass architecture reflecting an open sky",
  },
  about: {
    eyebrow: "About Adsons",
    title: "International trading experience since 2001.",
    copy: "From a trading business to a trusted international partner in the cellphone accessories industry.",
    image: "/images/architecture.jpg",
    alt: "Modern glass architecture reflecting an open sky",
  },
  contact: {
    eyebrow: "Start a Conversation",
    title: "Let’s build the next lasting partnership.",
    copy: "Introduce your business, market and requirements so the right Adsons conversation can begin.",
    image: "/images/warehouse.png",
    alt: "Organized consumer electronics accessories warehouse",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-lockup ${footer ? "brand-lockup-footer" : ""}`}>
      <span className="brand-mark-shell" aria-hidden="true">
        <img src="/images/adsons-mark.png" alt="" />
      </span>
      <span className="wordmark-text">
        <strong>{siteConfig.name}</strong>
        <small>{footer ? `Since ${siteConfig.establishedYear}` : siteConfig.descriptor}</small>
      </span>
    </span>
  );
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
        <a className="wordmark" href="/" aria-label="Adsons home">
          <BrandLockup />
        </a>

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
            <a
              key={item.href}
              className={pagePath[page] === item.href ? "active" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/contact">
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
          <a className="wordmark wordmark-footer" href="/">
            <BrandLockup footer />
          </a>
          <p>{siteConfig.signature}</p>
          <div className="footer-contact">
            <a href={`mailto:${siteConfig.email}`}>
              <span>Email</span>
              {siteConfig.email}
            </a>
            <a
              href={whatsappHref("Hello Adsons, I would like to discuss a business enquiry.")}
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
              {siteConfig.whatsappNumber}
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <div>
            <span>Explore</span>
            {navigation.slice(1, 4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <div>
            <span>Company</span>
            {navigation.slice(4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <div>
            <span>Markets</span>
            {markets.map((market) => <p key={market.name}>{market.name}</p>)}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Adsons. All rights reserved.</p>
        <p>Established {siteConfig.establishedYear}.</p>
      </div>
    </footer>
  );
}

function WhatsAppChat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref("Hello Adsons, I would like to discuss a business enquiry.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Adsons on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img className="whatsapp-icon" src="/images/whatsapp-icon.png" alt="" aria-hidden="true" />
    </a>
  );
}

function Layout({ page, children }: { page: Page; children: React.ReactNode }) {
  return (
    <>
      <Header page={page} />
      <main>{children}</main>
      <Footer />
      <WhatsAppChat />
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
        <h2>Build your next supply partnership with Adsons.</h2>
        <p>Tell us about your business, market and broad requirements. We’ll continue the conversation directly.</p>
        <a className="button button-light" href="/contact">
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
      <img src={hero.image} alt={hero.alt} />
      <div className="photo-wash" />
      <div className="container inner-hero-content">
        <p className="eyebrow light">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p>{hero.copy}</p>
      </div>
    </section>
  );
}

function StrengthGrid() {
  return (
    <div className="strength-grid">
      {strengths.map((item, index) => (
        <article key={item.title}>
          <span>0{index + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  );
}

function MarketList() {
  return (
    <div className="region-list">
      {markets.map((market) => (
        <article key={market.name}>
          <span>{market.number}</span>
          <h3>{market.name}</h3>
          <p>{market.copy}</p>
        </article>
      ))}
    </div>
  );
}

function LogoStage() {
  return (
    <div className="logo-stage">
      <img src="/images/adsons-logo.png" alt="Adsons - Since 2001" />
    </div>
  );
}

function HomePage() {
  return (
    <Layout page="home">
      <section className="home-hero">
        <img src="/images/warehouse.png" alt="Organized consumer electronics accessories warehouse" />
        <div className="photo-wash" />
        <div className="container hero-content">
          <p className="eyebrow light">International trading · Established 2001</p>
          <h1>Connecting businesses.<br />Building lasting partnerships.</h1>
          <p className="hero-copy">Adsons specializes in the import, export and wholesale distribution of cellphone accessories across international markets.</p>
          <div className="hero-actions">
            <a className="button button-light" href="/contact">Start a trade enquiry <Arrow /></a>
            <a className="text-link light" href="/about">Discover Adsons <Arrow /></a>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>2001</strong><span>Year established</span></div>
          <div><strong>Global</strong><span>Sourcing & distribution</span></div>
          <div><strong>02</strong><span>Proprietary brands</span></div>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="container intro-grid">
          <p className="eyebrow">Who we are</p>
          <div>
            <h2>International reach.<br />A relationship-first approach.</h2>
            <p>For nearly 25 years, Adsons has earned the trust of wholesalers, distributors, retailers and importers through quality products, competitive pricing and dependable service.</p>
            <a className="text-link" href="/about">Read our story <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="business-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Our business" title="Trusted sourcing, reliable supply and brands of our own." copy="Adsons connects manufacturers with businesses worldwide while developing proprietary brands for the changing cellphone accessories market." />
          <div className="business-grid">
            <a href="/trading" className="business-card business-trade">
              <img src="/images/warehouse.png" alt="Consumer electronics accessories stored in an organized warehouse" />
              <div className="card-shade" />
              <div><span>01 / International Trading</span><h3>Import, export and wholesale distribution.</h3><p>Explore our approach <Arrow /></p></div>
            </a>
            <a href="/categories" className="business-card business-retail">
              <img src="/images/technology.jpg" alt="Everyday cellphone and computer accessories" />
              <div className="card-shade" />
              <div><span>02 / Proprietary Brands</span><h3>ADSONS and DIGIT, built for global markets.</h3><p>Meet our brands <Arrow /></p></div>
            </a>
          </div>
        </div>
      </section>

      <section className="strengths-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Why Adsons" title="Experience that supports confident growth." copy="A practical trading foundation built through international experience and long-term relationships." />
          <StrengthGrid />
        </div>
      </section>

      <section className="regions-section section-space">
        <div className="container regions-layout">
          <SectionHeading eyebrow="Markets we serve" title="Connecting businesses across borders." copy="Our sourcing network and supply chain support established relationships in the Middle East, Africa and wider international markets." />
          <MarketList />
        </div>
      </section>

      <section className="legacy-section">
        <LogoStage />
        <div className="legacy-copy">
          <p className="eyebrow">Our purpose</p>
          <h2>Strong businesses begin with trust.</h2>
          <p>We connect businesses through trusted products, reliable supply solutions and enduring partnerships that create mutual growth and long-term success.</p>
          <a className="text-link" href="/retail">What guides us <Arrow /></a>
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
          <p className="eyebrow">What we do</p>
          <div>
            <h2>From global sourcing to reliable distribution.</h2>
            <p>Through a trusted sourcing network and an efficient supply chain, Adsons connects leading manufacturers with businesses worldwide, supporting consistent product availability and dependable service.</p>
          </div>
        </div>
      </section>

      <section className="process-section section-space">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="A clear path from requirement to partnership." />
          <div className="process-grid">
            {[
              ["01", "Understand", "We begin with your business, market and broad cellphone accessory requirements."],
              ["02", "Source", "Our global network helps align trusted supply with the right commercial opportunity."],
              ["03", "Coordinate", "Direct communication and an efficient supply chain keep requirements moving."],
              ["04", "Grow", "Every order is an opportunity to strengthen a long-term business partnership."],
            ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="strengths-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Why Adsons" title="Nearly 25 years of focused trading expertise." />
          <StrengthGrid />
        </div>
      </section>

      <section className="regions-section section-space">
        <div className="container regions-layout">
          <SectionHeading eyebrow="International reach" title="Built to connect markets." copy="Adsons serves wholesalers, distributors, retailers and importers across the Middle East, Africa and international markets." />
          <MarketList />
        </div>
      </section>
      <CTA />
    </Layout>
  );
}

function BrandsPage() {
  return (
    <Layout page="categories">
      <InnerHero page="categories" />
      <section className="section-space">
        <div className="container intro-grid">
          <p className="eyebrow">Owned & developed by Adsons</p>
          <div>
            <h2>Two proprietary brands. One commitment to dependable value.</h2>
            <p>Alongside our international trading operations, Adsons owns and develops ADSONS and DIGIT. Both brands are shaped around quality, performance and value for an evolving global marketplace.</p>
          </div>
        </div>
      </section>

      <section className="brand-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Our brands" title="Developed with the market in mind." />
          <div className="brand-grid">
            {brands.map((brand) => (
              <article className="brand-card" key={brand.name}>
                <span>{brand.number}</span>
                <h3>{brand.name}</h3>
                <p>{brand.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="privacy-band">
        <div className="container privacy-inner">
          <span>Portfolio update</span>
          <h2>Product and collection details will be added here later.</h2>
          <div>
            <p>For now, this page introduces the confirmed proprietary brands without publishing unverified product information.</p>
            <a className="text-link light" href="/contact">Discuss a business requirement <Arrow /></a>
          </div>
        </div>
      </section>
      <CTA compact />
    </Layout>
  );
}

function ValuesPage() {
  return (
    <Layout page="retail">
      <InnerHero page="retail" />
      <section className="section-space">
        <div className="container intro-grid">
          <p className="eyebrow">Our promise</p>
          <div>
            <h2>Success is measured by the partnerships we build.</h2>
            <p>Every order is an opportunity to earn trust. Every shipment is a promise delivered. Every partnership is built to last.</p>
          </div>
        </div>
      </section>

      <section className="values-section section-space">
        <div className="container">
          <SectionHeading eyebrow="Our core values" title="How we work, every day and across every market." />
          <div className="value-grid">
            {values.map((value, index) => (
              <article key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-section reverse">
        <div className="legacy-image"><img src="/images/warehouse.png" alt="Organized consumer electronics accessories warehouse" /></div>
        <div className="legacy-copy">
          <p className="eyebrow">Our commitment</p>
          <h2>Professional in approach. Personal in commitment.</h2>
          <p>We create lasting value through trusted partnerships, reliable supply solutions and a customer-first way of working.</p>
          <a className="text-link" href="/about">Learn about Adsons <Arrow /></a>
        </div>
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
        <div className="container intro-grid">
          <p className="eyebrow">Our story</p>
          <div>
            <h2>Growing through trust, experience and global collaboration.</h2>
            <p>Established in 2001, Adsons has grown from a trading business into a trusted international partner in the cellphone accessories industry.</p>
            <p>Over the years, we have expanded our global sourcing network, strengthened our supply chain and built long-term relationships with customers and suppliers across multiple markets.</p>
          </div>
        </div>
      </section>

      <section className="numbers-band">
        <div className="container number-grid">
          <div><strong>2001</strong><span>Established</span></div>
          <div><strong>Import</strong><span>International sourcing</span></div>
          <div><strong>Export</strong><span>Global distribution</span></div>
          <div><strong>02</strong><span>Proprietary brands</span></div>
        </div>
      </section>

      <section className="section-space purpose-section">
        <div className="container">
          <SectionHeading eyebrow="Our direction" title="A clear purpose, mission and vision." />
          <div className="purpose-grid">
            <article><span>01</span><h3>Purpose</h3><p>To connect businesses through trusted products, reliable supply solutions and enduring partnerships.</p></article>
            <article><span>02</span><h3>Mission</h3><p>To provide reliable cellphone accessories, trusted brands and efficient global supply solutions that help businesses grow with confidence.</p></article>
            <article><span>03</span><h3>Vision</h3><p>To become one of the world’s most trusted companies in the cellphone accessories industry, recognized for quality, innovation and long-term partnerships.</p></article>
          </div>
        </div>
      </section>

      <section className="legacy-section reverse">
        <LogoStage />
        <div className="legacy-copy">
          <p className="eyebrow">Brand philosophy</p>
          <h2>Built on trust. Built to last.</h2>
          <p>We believe the strongest businesses are built on trust, and the strongest partnerships are built to last.</p>
          <a className="text-link" href="/retail">Explore our values <Arrow /></a>
        </div>
      </section>
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
          <div>
            <p className="eyebrow">Start here</p>
            <h2>A focused conversation from the first introduction.</h2>
            <p>Adsons welcomes enquiries from wholesalers, distributors, retailers, importers, manufacturers and relevant business partners.</p>
          </div>
          <div className="contact-card">
            <span>Trade & partnership enquiries</span>
            <h3>Help us understand your requirement.</h3>
            <p>Include these details in your first message:</p>
            <ul>
              <li>Your name and company</li>
              <li>Country or market</li>
              <li>Nature of your enquiry</li>
              <li>Broad requirement or opportunity</li>
            </ul>
            <div className="contact-status">
              <div>
                <strong>Chat with us on WhatsApp</strong>
                <a href={whatsappHref("Hello Adsons, I would like to discuss a business enquiry.")} target="_blank" rel="noreferrer">
                  +971 55 505 5198
                </a>
              </div>
              <div>
                <strong>Email us</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-options section-space">
        <div className="container">
          <SectionHeading eyebrow="Who we work with" title="A starting point for every serious business conversation." />
          <div className="option-grid">
            {[
              ["Wholesale & Distribution", "Discuss market requirements, supply needs and long-term distribution opportunities."],
              ["Retailers & Importers", "Introduce your business and the broad cellphone accessory needs of your market."],
              ["Manufacturers & Partners", "Share a relevant sourcing, supply or strategic partnership opportunity."],
            ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p><a className="text-link" href="/trading">Our trading approach <Arrow /></a></article>)}
          </div>
        </div>
      </section>

      <section className="preparation-band">
        <div className="container">
          <p className="eyebrow light">Adsons · Since 2001</p>
          <h2>{siteConfig.signature}</h2>
        </div>
      </section>
    </Layout>
  );
}

export function SitePage({ page }: { page: Page }) {
  if (page === "home") return <HomePage />;
  if (page === "trading") return <TradingPage />;
  if (page === "categories") return <BrandsPage />;
  if (page === "retail") return <ValuesPage />;
  if (page === "about") return <AboutPage />;
  return <ContactPage />;
}
