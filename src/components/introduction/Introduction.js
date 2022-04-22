import React from "react";
import { getIntroduction } from "../../helpers/HomeData";

function Introduction() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(252, 240, 228, 0.35), rgba(252, 240, 228, 0.35)), url(${getIntroduction.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
          <p>{getIntroduction.title}</p>
      </div>
    </div>
  );
}

export default Introduction;
