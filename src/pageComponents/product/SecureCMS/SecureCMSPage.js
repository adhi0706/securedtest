"use client";

import React from "react";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import SectionTitle from "../../../components/common/SectionTitle";
import FAQs from "../../../components/common/FAQs";
import MetaTags from "../../../components/common/MetaTags";
import ProductCard from "../../../components/productService/ProductCard";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import BookMeetCta from "../../../components/common/bookMeetCta";
import {
  Activity,
  ShieldCheck,
  ToggleRight,
  Database,
  ArrowRight,
  Gavel,
  Crosshair,
  Network,
  Zap,
  Shield,
  FileCheck,
  Lock,
  Eye,
  Bell
} from "lucide-react";
import { motion } from 'framer-motion';
import ComplianceRisks from "./ComplianceRisks";
import DPDPProvisions from "./DPDPProvisions";
import ComplianceProcess from "./ComplianceProcess";
import IndustrySectors from "./IndustrySectors";
import {
  faqsData,
  features,
  benefits,
  complianceRisks,
  provisions,
  processSteps,
  industryList
} from "./data";

function SecureCMSPage() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  const stats = [
    { name: 'Explicit Consent', stat: 'Verified', icon: <ShieldCheck className="text-tertiary w-4 h-4" /> },
    { name: 'Audit Logging', stat: 'Encrypted', icon: <Database className="text-tertiary w-4 h-4" /> },
    { name: 'Preference Center', stat: 'Live', icon: <ToggleRight className="text-blue-400 w-4 h-4" /> }
  ];

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit">
      <MetaTags
        data={{
          title: "Secure CMS: Consent Management for DPDP Act Compliance",
          desc: "Collect, manage, and audit user consent with real-time dashboards and audit trails — fully compliant with India's Digital Personal Data Protection Act (DPDP), 2023.",
          keywords:
            "Secure CMS, DPDP Act compliance, India data privacy, consent management platform, privacy compliance India, consent orchestration, GDPR India, preference center",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />

      <div className="product">
        {/* Custom Hero Section */}
        <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary">

          {/* Removed floating Try it now button - now in navbar */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 w-fit">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <span className="text-sm text-tertiary font-medium">Get compliant in less than 24 hours</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-secondary dark:text-white">
                  Consent Management Platform for <span className="text-tertiary">DPDP Compliance in India</span>
                </h1>

                <p className="text-lg text-labelGray dark:text-gray-400 max-w-xl leading-relaxed">
                  Collect, manage, and audit user consent with real-time dashboards, audit trails, and user rights tools — fully compliant with India’s Digital Personal Data Protection Act (DPDP), 2023.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => typeof window !== "undefined" && window.open("https://calendly.com/nikhil-securedapp/30min")}
                    className="px-8 py-4 bg-gradient-to-r from-[#00d2ff] to-[#0072ff] hover:opacity-90 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(0,114,255,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    Book a Free Demo <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => typeof window !== "undefined" && window.open("https://9k6he91c.forms.app/data-privacy-impact-assessment-dpdp-act-india")}
                    className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-medium rounded-xl hover:bg-secondary/10 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    Generate your DPDP Audit Report
                  </motion.button>
                </div>
              </motion.div>

              {/* Right 3D Dashboard Mock */}
              <motion.div
                initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: -10, rotateX: 10, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative hidden lg:block h-[600px] w-full"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <div
                  className="animate-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-6 shadow-2xl flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <Gavel className="text-tertiary w-5 h-5" />
                      <span className="font-medium text-secondary dark:text-white">DPDP Enforcement Panel</span>
                    </div>
                    <span className="text-xs font-mono text-tertiary bg-tertiary/10 px-2 py-1 rounded">INDIA REGION</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {stats.map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-gray-50/50 dark:bg-white/5 p-3 rounded-lg border border-gray-200 dark:border-white/10">
                        <div className="flex items-center gap-3 text-sm text-secondary/80 dark:text-gray-300">
                          {item.icon} {item.name}
                        </div>
                        <span className="text-xs text-secondary/60 dark:text-gray-400">{item.stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Side Element 1 */}
                <div
                  className="animate-float-delayed absolute top-[10%] -left-[5%] w-[200px] bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-4 shadow-xl z-20"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <div className="text-xs text-secondary/60 dark:text-gray-400 mb-2">Compliance Alert</div>
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-3 h-3 text-red-500" />
                    <span className="text-[10px] text-red-500 uppercase font-bold">DPDP RISK LEVEL</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "20%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="h-full bg-gradient-to-r from-red-500 to-tertiary"
                    />
                  </div>
                </div>

                {/* Floating Side Element 2 */}
                <div
                  className="animate-float-simple absolute bottom-[20%] -right-[5%] w-[220px] bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 z-20"
                  style={{ transform: 'translateZ(100px)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-tertiary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-secondary/60 dark:text-gray-400">Total Audit Logs</span>
                      <span className="text-sm font-bold text-secondary dark:text-white">4.2M Records</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-12 mt-2">
                    {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-tertiary/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 1: Problems / Risks */}
        <ComplianceRisks risks={complianceRisks} />

        {/* Section 2: What is Secure CMS */}
        <section className="py-24 relative overflow-hidden bg-transparent border-y border-white/10">
          {/* Background glowing path simulation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent absolute top-1/2 left-1/2 -translate-x-1/2 rotate-45 opacity-20" />
            <div className="w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-45 opacity-20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="text-tertiary font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
                  <Crosshair className="w-4 h-4" /> Definition & Benefits
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary dark:text-white">
                  What Is a Consent <br />Management Platform?
                </h2>
                <p className="text-secondary/70 dark:text-gray-400 text-lg leading-relaxed">
                  A consent management platform is a software platform that enables organizations to
                  collect explicit user consent, store consent records securely with tamper-proof audit logs, allow
                  users to update or withdraw consent at any time, and generate compliance reports for
                  regulatory audits.
                </p>

                <ul className="space-y-4 mt-2">
                  {[
                    { text: "Collect explicit consent with granular specificity", icon: <Shield className="w-5 h-5 text-tertiary" /> },
                    { text: "Store immutable, timestamped records for audits", icon: <FileCheck className="w-5 h-5 text-tertiary" /> },
                    { text: "Enable real-time user preference updates", icon: <Zap className="w-5 h-5 text-tertiary" /> },
                    { text: "Generate audit-ready reports for DPDP compliance", icon: <Network className="w-5 h-5 text-tertiary" /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-gray-50/80 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm transition-all hover:bg-gray-100 dark:hover:bg-white/10 hover:border-tertiary/40">
                      <div className="bg-gray-100 dark:bg-white/5 p-2 rounded-lg border border-gray-200 dark:border-white/10 shadow-inner">
                        {item.icon}
                      </div>
                      <span className="text-secondary/80 dark:text-gray-300 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right side Visual - Premium Security Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] flex items-center justify-center overflow-hidden rounded-3xl backdrop-blur-3xl bg-white/5 border border-white/10"
                style={{
                  boxShadow: 'inset 0 0 80px rgba(18,213,118,0.06), 0 20px 60px rgba(0,0,0,0.5)'
                }}
              >
                {/* Ambient glow blobs */}
                <div style={{
                  position: 'absolute', width: 300, height: 300,
                  background: 'radial-gradient(circle, rgba(18,213,118,0.15) 0%, transparent 70%)',
                  top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%'
                }} />
                <div style={{
                  position: 'absolute', width: 200, height: 200,
                  background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
                  top: '20%', right: '15%', borderRadius: '50%'
                }} />

                {/* Outer orbit ring – slow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  className="border-[1.5px] border-dashed border-gray-300 dark:border-white/10 rounded-full"
                  style={{
                    position: 'absolute', width: 380, height: 380
                  }}
                >
                  {[
                    { deg: 0, icon: <Lock className="w-4 h-4 text-white" />, bg: 'linear-gradient(135deg,#6366f1,#4f46e5)', label: 'Encrypted' },
                    { deg: 120, icon: <Eye className="w-4 h-4 text-white" />, bg: 'linear-gradient(135deg,#0ea5e9,#0284c7)', label: 'Monitored' },
                    { deg: 240, icon: <Bell className="w-4 h-4 text-white" />, bg: 'linear-gradient(135deg,#f59e0b,#d97706)', label: 'Alerted' },
                  ].map(({ deg, icon, bg, label }, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: `rotate(${deg}deg) translateX(190px) rotate(-${deg}deg)`,
                        marginTop: -22, marginLeft: -22
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        border: '2.5px solid rgba(255,255,255,0.2)'
                      }}>
                        {icon}
                      </div>
                      <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold text-secondary dark:text-white" style={{
                        position: 'absolute', top: 48, left: '50%', transform: 'translateX(-50%)',
                        backdropFilter: 'blur(10px)', borderRadius: 8, padding: '2px 8px',
                        whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}>{label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Middle orbit ring – faster, opposite direction */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="border border-dashed border-gray-200 dark:border-white/5 rounded-full"
                  style={{
                    position: 'absolute', width: 260, height: 260
                  }}
                >
                  {[
                    { deg: 60, icon: <Database className="w-3 h-3 text-white" />, bg: 'linear-gradient(135deg,#10b981,#059669)' },
                    { deg: 180, icon: <Network className="w-3 h-3 text-white" />, bg: 'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
                    { deg: 300, icon: <Zap className="w-3 h-3 text-white" />, bg: 'linear-gradient(135deg,#f43f5e,#e11d48)' },
                  ].map(({ deg, icon, bg }, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: `rotate(${deg}deg) translateX(130px) rotate(-${deg}deg)`,
                        marginTop: -16, marginLeft: -16,
                        width: 32, height: 32, borderRadius: '50%',
                        background: bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 3px 12px rgba(0,0,0,0.5)',
                        border: '2px solid rgba(255,255,255,0.2)'
                      }}
                    >{icon}</div>
                  ))}
                </motion.div>

                {/* Pulsing halo rings on core */}
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7, ease: 'easeOut' }}
                    style={{
                      position: 'absolute', width: 120, height: 120,
                      background: 'radial-gradient(circle, rgba(18,213,118,0.3) 0%, transparent 70%)',
                      borderRadius: '50%', zIndex: 5
                    }}
                  />
                ))}

                {/* Central shield core */}
                <div style={{ position: 'relative', zIndex: 20 }}>
                  <div style={{
                    width: 110, height: 110,
                    background: 'linear-gradient(135deg, #12D576 0%, #0c9e56 100%)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 0 8px rgba(18,213,118,0.15), 0 0 40px rgba(18,213,118,0.3)',
                    border: '3px solid rgba(255,255,255,0.2)'
                  }}>
                    <Shield className="w-12 h-12 text-secondary" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))' }} />
                  </div>
                </div>

                {/* Floating stat badges */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10"
                  style={{
                    position: 'absolute', top: 28, right: 28,
                    backdropFilter: 'blur(10px)', borderRadius: 14,
                    padding: '8px 14px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#12D576' }} />
                  <span className="text-[12px] font-bold text-secondary dark:text-white">99.9% Uptime</span>
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10"
                  style={{
                    position: 'absolute', bottom: 32, left: 28,
                    backdropFilter: 'blur(10px)', borderRadius: 14,
                    padding: '8px 14px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  <FileCheck className="w-4 h-4 text-tertiary" />
                  <span className="text-[12px] font-bold text-secondary dark:text-white">DPDP Compliant</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  style={{
                    position: 'absolute', bottom: 40, right: 24,
                    background: 'linear-gradient(135deg,#12D576,#0c9e56)', borderRadius: 14,
                    padding: '8px 14px', boxShadow: '0 4px 20px rgba(18,213,118,0.2)',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}
                >
                  <Zap className="w-4 h-4 text-secondary" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#001938' }}>Real-time Sync</span>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* Section 3: Key Provisions of DPDP Act */}
        <DPDPProvisions provisions={provisions} />

        {/* Section 4: Benefits */}
        <div className="features-section custom-securecms-cards">
          <SectionTitle
            name={"Benefits"}
            title={"Why Your Business Needs a Consent Manager"}
            description={
              "Moving beyond just 'fixing a law.' Secure CMS helps you regain control over your data ecosystem and build meaningful relationships with your users through absolute transparency."
            }
          />
          <FeatureCards featureData={benefits} />
        </div>

        {/* Section 5: How it Works / Process */}
        <ComplianceProcess steps={processSteps} />

        {/* Section 6: Key Features */}
        <div className="features-section custom-securecms-cards">
          <SectionTitle
            name={"Features"}
            title={"Key Features of our Consent Management Platform"}
            description={
              "The comprehensive toolkit your legal and engineering teams need for absolute compliance and operational efficiency."
            }
          />
          <FeatureCards featureData={features} />
        </div>

        {/* Section 7: Industries */}
        <IndustrySectors industries={industryList} />

        <div className="mt-20 custom-securecms-faq">
          <FAQs faqsData={faqsData} />
        </div>
      </div>

      <Footer />
      <BookMeetCta />
    </div>
  );
}

export default SecureCMSPage;
