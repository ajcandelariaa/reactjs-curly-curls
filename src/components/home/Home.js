import React from "react";
import MainProducts from "../products/mainProducts/MainProducts";
import Introduction from "./introduction/Introduction";
import NewArrival from "./newArrival/main/NewArrival";

function Home() {
  return (
    <div className="introduction">
      <Introduction />
      <NewArrival />
      <MainProducts />
    </div>
  );
}

export default Home;
