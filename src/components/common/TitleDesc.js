import React from "react";
import Image from "next/image";
import { useState } from "react";
import Image from "next/image";

function TitleDesc({ title, desc }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default TitleDesc;
