import React from "react";
import Image from "next/image";
import { useState } from "react";
import Image from "next/image";

function HowItWorksBox({ title, desc, icon }) {
  return (
    <div>
      <span>{icon}</span>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

function FeatureBox({ title, desc, icon }) {
  return (
    <div>
      <span>{icon}</span>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

function WhyChooseBox({ title, desc, icon }) {
  return (
    <div>
      <span>{icon}</span>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

function BenefitsBox({ title, desc, icon }) {
  return (
    <div>
      <span>{icon}</span>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

export { HowItWorksBox, WhyChooseBox, FeatureBox, BenefitsBox };
