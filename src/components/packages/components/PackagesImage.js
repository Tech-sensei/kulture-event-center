// PackageImage.js
import React from "react";
import Image from "next/image";

const PackageImage = ({ imageSrc, className }) => (
  <div className={className}>
    <Image src={imageSrc} alt="packages" width={544} height={608} />
  </div>
);

export default PackageImage;
