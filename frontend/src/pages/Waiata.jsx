import React from "react";
import LyricsPage from "./LyricsPage";
import waiataData from "../data/waiataData";
import maoriCarving from "../assets/images/maori-carving.jpg";

function Waiata() {
  return (
    <LyricsPage
      pageTitle="Waiata"
      items={waiataData}
      backgroundImage={maoriCarving}
    />
  );
}

export default Waiata;