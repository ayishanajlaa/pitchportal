import Image from "next/image";
import React from "react";

const PitchPortalFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="text-center">
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="Feature Icon"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const PitchPortalFeatures = () => {
  const features = [
    {
      imgSrc: "/features/1.svg",
      title: "Investment Opportunities",
      desc: "Discover diverse investment opportunities from promising startups and entrepreneurs.",
    },
    {
      imgSrc: "/features/2.svg",
      title: "Partnership Deals",
      desc: "Forge strategic partnerships with innovative startups and business ventures.",
    },
    {
      imgSrc: "/features/3.svg",
      title: "Premium Membership",
      desc: "Unlock exclusive benefits and features with our premium membership plans.",
    },
    {
      imgSrc: "/features/3.svg",
      title: "Dedicated Support",
      desc: "Receive dedicated support from our team of experts, available around the clock.",
    },
  ];

  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHAT IS INCLUDED</span>
      <h2 className="title text-center">Explore Key Features</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        {features.map((feature, index) => (
          <PitchPortalFeature
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default PitchPortalFeatures;
