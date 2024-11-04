"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

const MetaTags = ({ data }) => {
  const path = usePathname();
  var url = "https://securedapp.io" + path;

  const metadata = [
    {
      title: "Blockchain Security & Smart Contract Audits | SecureDApp.io",
      desc: "SecureDApp offers blockchain security, smart contract audits, DApp development, and compliance services. Protect your digital assets today.",
      keywords:
        "blockchain security, smart contract audits, DApp development, compliance solutions, Layer 1 and Layer 2 chains, Ethereum security, Algorand security, Solana audits, Aptos blockchain, Hyperledger auditing, Binance Smart Chain security, DeFi protocol audits, NFT security, DAO audits, digital asset protection, non-custodial wallet security, custodial wallet protection, blockchain platform security, intellectual property protection, vulnerability detection blockchain",
      image: "/assets/images/ProductPages/ss/hero.webp",
      path: "/",
    },
    {
      title: "SecurePad: Zero-Fee Tokenization for Blockchain Security",
      desc: "Launch, trade, and manage tokens seamlessly with SecurePad, the zero-fee platform offering secure, no-code, cross-chain blockchain services.",
      keywords:
        "SecurePad, blockchain security, tokenization, free token creation, no-code blockchain, cross-chain functionality, decentralized exchange, token staking, token locker, Initial DEX Offering, blockchain project, SecureDApp",
      image: "/assets/images/ProductPages/sp/sp-hero.jpg",
      path: "/secure-pad",
    },
    {
      title: "SecureTrace: AI-Powered Blockchain Forensics & Compliance",
      desc: "SecureTrace simplifies blockchain investigations with AI-driven tools. Trace transactions, enhance security, and ensure compliance with comprehensive analysis.",
      keywords:
        "SecureTrace, blockchain forensics, AI-powered investigation, blockchain compliance, transaction tracing, forensic analysis, SecureDApp, blockchain security, AI in blockchain, digital asset recovery",
      image: "/assets/images/ProductPages/st/st-hero.webp",
    },
    {
      title: "Blockchain Threat Detection with Secure Watch - SecureDApp",
      desc: "Secure Watch offers AI-driven real-time blockchain threat detection, ensuring smart contract security by identifying and mitigating vulnerabilities.",
      keywords:
        "blockchain threat detection, smart contract security, Secure Watch, AI-driven monitoring, blockchain security tool, unauthorized access, real-time blockchain surveillance, smart contract vulnerabilities, blockchain threat intelligence, secure watch features",
      image: "/assets/images/ProductPages/sw/hero.webp",
    },
  ];

  const orgSchema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    "@id": "#Organization",
    url: "https://securedapp.io/",
    legalName: "Vettedcode Technologies India Pvt. Ltd",
    name: "SecureDApp.io",
    description:
      "SecureDApp emerged from a united vision to secure the future of Web3. Founded by two dedicated innovators from India, the company recognized the urgent need for specialized blockchain security solutions.",
    image: "https://securedapp.io/assets/images/ProductPages/ss/hero.webp",
    logo: "https://securedapp.io/assets/images/securedapp-logo-dark.svg",
    telephone: "+919606015868",
    email: "hello@securedapp.in",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "235, 2nd and 3rd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar Bengaluru",
      addressLocality: "Bengaluru",
      addressRegion: "KARNATAKA",
      addressCountry: "IN",
      postalCode: "560038",
    },
    sameAs: [
      "https://www.linkedin.com/company/securedapp/",
      "https://x.com/secure_dapp",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SecureDApp ? ",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SecureDApp is a leading blockchain security firm specializing in smart contract audits, decentralized application (DApp) development, and comprehensive compliance solutions. We help businesses secure their blockchain operations, ensuring their projects are safe, reliable, and aligned with industry standards.",
        },
      },
      {
        "@type": "Question",
        name: "What blockchain platforms does SecureDApp support ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SecureDApp supports many blockchain platforms, including Ethereum, Algorand, Solana, Aptos, Hyperledger, Arbitrum, Binance Smart Chain, etc. We cater to both Layer 1 and Layer 2 chains and custodial and non-custodial wallets, offering extensive coverage for your blockchain security needs.",
        },
      },
    ],
  };

  const webSchema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": "#WebPage",
    url: "https://securedapp.io/",
    name: "securedapp.io",
  };

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.title}</title>
        <meta name="author" content="SecureDapp" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://securedapp.io/assets/images/logo.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://securedapp.io/assets/images/logo.png"
        />

        {/* Basic Meta Tags */}
        {<meta name="description" content={data.desc} />}
        {<meta name="keywords" content={data.keywords} />}

        {/* Open Graph Meta Tags (for social media) */}
        {<meta property="og:title" content={data.title} />}
        {<meta property="og:description" content={data.desc} />}
        {data.image && (
          <meta
            property="og:image"
            content={
              data.image.includes("https://")
                ? data.image
                : "https://securedapp.io" + data.image
            }
          />
        )}
        {<meta property="og:url" content={url} />}
        {<meta property="og:type" content="website" />}

        {/* Twitter Meta Tags */}
        {<meta name="twitter:card" content="summary_large_image" />}
        {<meta name="twitter:title" content={data.title} />}
        {<meta name="twitter:description" content={data.desc} />}
        {data.image && (
          <meta
            name="twitter:image"
            content={
              data.image.includes("https://")
                ? data.image
                : "https://securedapp.io" + data.image
            }
          />
        )}

        {/* SEO Meta Tags */}
        {<meta name="robots" content="index, follow" />}
        {<meta name="googlebot" content="index, follow" />}

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="canonical" href={url} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-GXZX7PXY8D");`,
          }}
        />

        <GoogleAnalytics gaId="G-GXZX7PXY8D" dataLayerName="ga" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
    </html>
  );
};

export default MetaTags;
