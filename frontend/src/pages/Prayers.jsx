import React from "react";
import LyricsPage from "./LyricsPage";
import prayersData from "../data/prayersData";
import maoriCarving from "../assets/images/maori-carving.jpg";

function Prayers() {
  return (
    <LyricsPage
      pageTitle="Prayers"
      items={prayersData}
      backgroundImage={maoriCarving}
    />
  );
}

export default Prayers;