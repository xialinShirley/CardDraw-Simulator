import React from "react";
import "./carddrawndisplay.less";

function CardDrawnDisplay(props) {
  return (
    <div className="carddrawn">
      <div className="carddrawn-fourstar">
        <div className="carddrawn-fourstar-head">
          <span>⭐⭐⭐⭐</span>
          <span>
            （出货率：
            {props.summonTimes
              ? (
                  100 *
                  (props.summonFourlists.length / props.summonTimes)
                ).toFixed(2)
              : " "}
            {props.summonTimes ? " %" : " "} )
          </span>
        </div>
        <div className="carddrawn-fourstar-display">
          {props.summonFourlists.map((item) => {
            return <img alt="card-fourstar" src={item} />;
          })}
        </div>
      </div>
      <div className="carddrawn-threestar">
        <div className="carddrawn-threestar-head">
          <span>⭐⭐⭐</span>
          <span>
            （出货率：
            {props.summonTimes
              ? (
                  100 *
                  (props.summonThreelists.length / props.summonTimes)
                ).toFixed(2)
              : " "}
            {props.summonTimes ? " %" : " "} )
          </span>
        </div>
        <div className="carddrawn-threestar-display">
          {props.summonThreelists.map((item) => {
            return <img alt="card-fourstar" src={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default CardDrawnDisplay;
