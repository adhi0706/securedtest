export const features = [
  {
    header: "PQC API Service",
    tag: "Gateway",
    lede: "Run every PQC call through one governed gateway.",
    points: [
      {
        label: "Policy Guardrails",
        text: "REST tiers enforce policy checkpoints, credential segregation, and risk scoring on every request.",
      },
      {
        label: "Live Observability",
        text: "Stream cryptographic events into your SIEM with real-time audit feeds.",
      },
      {
        label: "Outcome",
        text: "Unify crypto governance while accelerating change approvals.",
      },
    ],
    icon: "settings-gear",
    media: [
      { src: "/assets/images/ProductPages/pqc/pqc api.png" },
    ],
  },
  {
    header: "Unified SDKs",
    tag: "Builders",
    lede: "Equip teams with ergonomic PQC toolkits.",
    points: [
      {
        label: "Accelerated Builds",
        text: "Safe defaults, generators, and rollback templates ship with every release.",
      },
      {
        label: "Language Coverage",
        text: "Ship one toolkit across web, mobile, server, and device workloads.",
      },
      {
        label: "Outcome",
        text: "Deliver PQC upgrades without derailing product roadmaps.",
      },
    ],
    icon: "code",
    media: [
      { src: "/assets/images/ProductPages/pqc/pqc sdk.png" },
    ],
  },
  {
    header: "Digital Signature & PKI",
    tag: "Trust",
    lede: "Coordinate regulated signing with PQC + classical bundles.",
    points: [
      {
        label: "Unified Workflows",
        text: "Delegated approvals and role policies govern every signature trail.",
      },
      {
        label: "Lifecycle Control",
        text: "API hooks orchestrate issuance, rotation, and revocation automatically.",
      },
      {
        label: "Outcome",
        text: "Produce chain-of-custody proof on demand for every signature.",
      },
    ],
    icon: "badge",
    media: [
      { src: "/assets/images/ProductPages/pqc/pqc sig.png" },
    ],
  },
  {
    header: "PQC VPN",
    tag: "Access",
    lede: "Keep remote access stable with PQC tunnels.",
    points: [
      {
        label: "Adaptive Posture",
        text: "Continuous posture checks keep Kyber handshakes fast and observable.",
      },
      {
        label: "Hybrid Tunnels",
        text: "Blend PQC with classical ciphers for compatibility at the edge.",
      },
      {
        label: "Outcome",
        text: "Give remote teams PQC protection without performance trade-offs.",
      },
    ],
    icon: "shield",
    media: [
      { src: "/assets/images/ProductPages/pqc/pqc vpn.png" },
    ],
  },
  {
    header: "PQC File Sharing & Chat",
    tag: "Collaboration",
    lede: "Protect executive collaboration end-to-end.",
    points: [
      {
        label: "Executive Controls",
        text: "Attested rooms apply watermarks, retention rules, and link expiry automatically.",
      },
      {
        label: "Session Insight",
        text: "Live analytics surface who accessed sensitive workstreams and when.",
      },
      {
        label: "Outcome",
        text: "Keep leadership syncs on sensitive workstreams with confidence.",
      },
    ],
    icon: "users",
    media: [
      { src: "/assets/images/ProductPages/pqc/pqc file.png" },
    ],
  },
  {
    header: "IoT & HSM",
    tag: "Devices",
    lede: "Harden device credentials and secrets at fleet scale.",
    points: [
      {
        label: "Fleet Provisioning",
        text: "Kyber enrollment secures device identities from onboarding through rotation.",
      },
      {
        label: "Orchestrated Secrets",
        text: "PQC-aware HSM automation governs wraps, unwraps, and attestation.",
      },
      {
        label: "Outcome",
        text: "Maintain tamper evidence and health scoring across distributed fleets.",
      },
    ],
    icon: "chip-brain",
    media: [
      { src: "/assets/images/ProductPages/pqc/pqc Iot.png" },
    ],
  },
];

export const benefits = [
  {
    header: "Quantum-Resistant by Design",
    description:
      "Built on NIST-selected algorithms and vetted parameter sets, combining PQC with classical where appropriate. Hybrid modes ensure safe migration and broad interoperability across clients, servers, and devices.",
    icon: "atom",
  },
  {
    header: "Faster Time-to-Value",
    description:
      "Drop-in APIs and unified SDKs remove crypto complexity, reducing integration time from weeks to hours. Reference implementations and examples accelerate adoption across multiple teams.",
    icon: "dashboard",
  },
  {
    header: "Policy & Compliance",
    description:
      "Comprehensive audit trails, key lifecycle controls, and role-based access policies help align with FIPS guidance, GDPR data handling, and SOC 2 controls while simplifying evidence collection.",
    icon: "report-board",
  },
  {
    header: "Future-Proof Architecture",
    description:
      "Algorithm agility and pluggable cryptographic backends let you adopt new PQC standards as they stabilize—without rewriting applications or breaking existing integrations.",
    icon: "reload",
  },
  {
    header: "Faster Integrations (Weeks ➝ Hours)",
    description:
      "Unified SDKs, clean APIs, and samples cut initial rollouts dramatically—often from multi-week spikes to a single sprint.",
    icon: "dashboard",
  },
  {
    header: "Low Overhead in Practice",
    description:
      "Batching, session reuse, and hybrid handshakes keep user-visible latency minimal while delivering PQC protection.",
    icon: "shield",
  },
  {
    header: "Compliance-Ready",
    description:
      "Built-in audit trails and policy controls simplify evidence collection for SOC 2 and data governance requirements.",
    icon: "report-board",
  },
];

export const whyChoose = [
  "Built for security and engineering teams to adopt PQC quickly without rewrites—balanced for control, performance, and compliance.",
  "NIST-track algorithms (Kyber, Dilithium, Falcon, SPHINCS+) implemented with security hardening and sensible defaults for real-world deployments.",
  "Hybrid KEM/TLS and classical compatibility to phase in PQC safely while preserving interoperability with existing clients and infrastructure.",
  "Enterprise-grade KMS/HSM integrations to protect key material, enable BYOK patterns, and enforce separation of duties across environments.",
  "A clear, staged migration path for applications, VPNs, and PKI with guidance for low-risk rollouts.",
];

export const suiteProducts = [
  {
    id: "api",
    name: "PQC API Service",
    blurb:
      "Cloud API for encryption, signatures, KMS, and certificate ops using NIST PQC algorithms.",
  },
  {
    id: "sdks",
    name: "PQC SDKs & Combined SDK",
    blurb:
      "Unified Sign/Encrypt/Decrypt with algorithm agility: Kyber, Dilithium, Falcon, SPHINCS+.",
  },
  {
    id: "chat",
    name: "PQC Chat App",
    blurb: "End-to-end encrypted messaging with quantum-safe key exchange.",
  },
  {
    id: "files",
    name: "PQC File Sharing",
    blurb: "Secure file sharing with PQC-protected data at rest and in transit.",
  },
  {
    id: "vpn",
    name: "PQC VPN",
    blurb: "Quantum-safe tunnels using PQC KEM for key exchange and AEAD channels.",
  },
  {
    id: "sign",
    name: "PQC Digital Signature",
    blurb: "Document and transaction signing with PQC signature schemes.",
  },
  {
    id: "pki",
    name: "PQC SSL Issuer & Open-Source CA",
    blurb: "Quantum-safe certificate issuing and community CA compatibility.",
  },
  {
    id: "iot",
    name: "Quantum-Safe IoT Device Manager",
    blurb: "Onboard, authenticate, and manage devices using PQC credentials.",
  },
  {
    id: "hsm",
    name: "PQC HSM",
    blurb: "Generate, store, and operate with PQC keys securely.",
  },
  {
    id: "kms",
    name: "Post-Quantum Secure KMS (Cloud)",
    blurb: "Tenant and workload protection with PQC-powered key management.",
  },
];

export const faqHeaders = ["General"];

export const faqsData = [
  [
    {
      q: "Which PQC algorithms are supported?",
      a: "Kyber (KEM), Dilithium/Falcon/SPHINCS+ (signatures), with hybrid and algorithm agility options.",
    },
    {
      q: "Do you support hybrid TLS/VPN?",
      a: "Yes. We support hybrid key exchange (PQC + X25519/ECDHE) for TLS and VPN.",
    },
    {
      q: "How do we migrate safely?",
      a: "Start with hybrid deployments via the API/SDK, strengthen archival protections, then phase-in full PQC.",
    },
    {
      q: "Is this open-source compatible?",
      a: "We interoperate with open-source CAs (e.g., EJBCA-like) and standard libraries where available.",
    },
    {
      q: "What is the performance impact of PQC?",
      a: "PQC ops are larger than classical, but with batching, session reuse, and hybrid modes, most apps see minimal user-visible latency. We benchmark and tune per product (API/SDK/VPN).",
    },
    {
      q: "Do you support key rotation and algorithm agility?",
      a: "Yes. We provide scheduled and event-based rotation, hybrid rollouts, and seamless upgrades across Kyber/Dilithium/Falcon/SPHINCS+ as standards evolve.",
    },
  ],
];
