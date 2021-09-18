import React from "react";
import AsidePart from "./Aside/AsidePart";
import CardDrawPart from "./CardDraw/CardDrawPart";

function BodyPart() {
  return (
    <div className="wrap">
      <div className="box left-box">
        <CardDrawPart />
      </div>
      <div className="box right-box">
        <AsidePart />
      </div>
    </div>
  );
}
export default BodyPart;
