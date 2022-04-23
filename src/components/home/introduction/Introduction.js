import React from "react";
import { getIntroduction } from "../../../helpers/HomeData";
import style from "./Introduction.module.css";

function Introduction() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(252, 240, 228, 0.85), rgba(252, 240, 228, 0.85)), url(${getIntroduction.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className={style.container}>
          <div className={style.introduction}>
            <div className={style.introduction_flex}>
              <img src={getIntroduction.image} alt={getIntroduction.image} />
              <div>
                <p>{getIntroduction.title}</p>
                <p className={style.tagline}>{getIntroduction.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
