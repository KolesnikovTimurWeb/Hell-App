import React from "react";

import "./Characters.scss";
import charactersPhoto from "@/images/characters/characters-image.jpg";
import { DownloadButtons } from "@/components/DownloadButtons/DownloadButtons";

import davil1 from "@/images/characters/devil1.jpg";
import davil2 from "@/images/characters/devil2.jpg";
import davil3 from "@/images/characters/devil3.jpg";
import davil4 from "@/images/characters/devil4.jpg";
import davil5 from "@/images/characters/devil5.jpg";

const Characters = () => {
  const photoPaths = [davil1, davil2, davil3, davil4, davil5];

  return (
    <section className="characters container">
      <h1>Game Items (NFTs)</h1>
      <div className="characters__body">
        <div className="characters__image">
          <img src={charactersPhoto} className="characters__photo" />
          <DownloadButtons />
        </div>

        <div className="characters__content">
          <h2 className="characters__title">Characters</h2>
          <div className="characters__discription">
            <p>
              Avatars : Change your in-game appearance while also boosting your
              stats.
            </p>

            <p>Armors</p>
            <p>
              Fend off would be raiders with defense boosting armor. Rarer armor
              can also boost other stats.
            </p>
            <p>
              As you might expect, weapons primarily boost your damage stat.
              Rarer weapons will increase other stats as well.
            </p>
            <div className="characters__content_images">
              {photoPaths.map((photoPath, index) => (
                <div key={index}>
                  <img src={photoPath} alt={`Photo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
