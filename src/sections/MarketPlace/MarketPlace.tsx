import React from "react";

import FullWidthBg from "../../components/FullWidthBg/FullWidthBg";
import "./MarketPlace.scss";

import davil1 from "@/images/marketplace/devil1.jpg";
import davil2 from "@/images/marketplace/devil2.jpg";
import davil3 from "@/images/marketplace/devil3.jpg";
import davil4 from "@/images/marketplace/devil4.jpg";
import davil5 from "@/images/marketplace/devil5.jpg";
import davil6 from "@/images/marketplace/devil6.jpg";
import davil7 from "@/images/marketplace/devil7.jpg";
import davil8 from "@/images/marketplace/devil8.jpg";

import MarketPlaceBack from "@/images/marketplace/marketplace.png";
import { TextSplit } from "@/components/TextSplit/TextSplit";

const MarketPlace = () => {
  const photoPaths = [
    davil1,
    davil2,
    davil3,
    davil4,
    davil5,
    davil6,
    davil7,
    davil8,
  ];

  const leftSide = [
    "Buy, sell, and trade your game NFTs",
    "Develop and expand your estates",
    "Unleash the power of unique NFT characters",
  ];

  const rightSide = [
    "Defend your hard-earned estates with powerful gate guardians",
    "Immerse yourself in the chaos with regular events and challenges",
  ];

  return (
    <section className="marketplace">
      <FullWidthBg
        url={MarketPlaceBack}
        customClass="marketplace__background"  
      >
        <div className="marketplace__body">
          <h1>Web3 Marketplace</h1>
          <p className="marketplace-text">
            Crazy Hell stands as an open-source game intricately crafted upon
            the robust Hive blockchain and ecosystem. This foundation fosters a
            dynamic marketplace and social environment that encompasses
            virtually all assets within the game.
          </p>
        </div>
        <div className="marketplace__images">
          {photoPaths.map((photoPath, index) => (
            <div key={index} className="marketplace__image">
              <img src={photoPath} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="info-block">
          <div className="side">
            <ul>
              {leftSide.map((item, index) => (
                <li key={index}>
                  <TextSplit phrase={item}/>
                </li>
              ))}
            </ul>
          </div>
          <div className="side">
            <ul>
              {rightSide.map((item, index) => (
                <li key={index}>
                  <TextSplit phrase={item}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FullWidthBg>
    </section>
  );
};

export default MarketPlace;
