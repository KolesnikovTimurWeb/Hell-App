import { useRef, useState } from "react";
import featuresList from "./featuresData.json";

import { motion } from "framer-motion";
import classNames from "classnames";

import './Features.scss'

import downloadImage from '@/images/features/features-download.jpg';
import { DownloadButtons } from "@/components/DownloadButtons/DownloadButtons";


const featuresAnim = {
    closed: {
      height: 0,
      opacity: 0,
      padding: 0,
      transition: {
        duration: 0.2,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      height: "max-content",
      padding: '2vw',
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { delay: 0.23 },
        padding: { delay: 0.1 },
      },
    },
};

const Features = () => {
  const [activeMenu, setActiveMenu] = useState(-1);

  const toggleOnClick = (index: number) => {
    setActiveMenu(activeMenu === index ? -1 : index);
  };

  return (
    <section className="features container">
      

        <div className="features__wrapper">
          <h1>Game Features</h1>

          <ul className="small-text features__list">
            {featuresList.map((currentFeature, index) => {
              const { feature, text } = currentFeature;

              return (
                <li key={index} className="features__list-item">
                  <motion.span
                    className={classNames('features__list-title',
                      {'features__list-title--active': activeMenu === index}
                    )}
                    onClick={() => toggleOnClick(index)} 
                  >
                    {feature}
                  </motion.span>
                  <motion.p
                    variants={featuresAnim}
                    animate={activeMenu === index ? "open" : "closed"}
                    initial="closed"
                    className="features__list-text"
                  >
                    {text}
                  </motion.p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="features__download">
            <img
              src={downloadImage}
              className="features__download_image"
            />

            <DownloadButtons />
        </div>
      
    </section>
  );
};

export default Features;
