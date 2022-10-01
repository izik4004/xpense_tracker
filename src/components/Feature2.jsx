import React from "react";

import { features } from "../data";

const Feature2 = () => {
  const { feature2} = features;

  const { pretitle, title, image, subtitle, btnLink, btnIcon } = feature2;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:dap-x-[30px]">
          <div className="flex-1 order-1 lg:order-2"
          data-aos='fade-right'
          data-aos-offset='400'>
            <div className="pretitle">{pretitle}</div>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink}
              <img src={btnIcon} alt="" />
            </button>
          </div>
          <div className="flex-1 order-2 lg:order-1"
          data-aos='fade-left'
          data-aos-offset='300'
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
