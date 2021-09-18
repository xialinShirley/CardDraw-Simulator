import CardDrawDisplay from "./CardDrawnDisplay";
import React, { useState } from "react";
import { goldenCards, silverCards, copperCards, upCards } from "./cardData";
import "./carddraw.less";
function CardDrawPart() {
  let [displayResult, setDisplayResult] = useState([]);
  let [baodiTimes, setBaodiTimes] = useState(0);
  let [summonFourlists, set4lists] = useState([]);
  let [summonThreelists, set3lists] = useState([]);
  let [Starnum, setStarnum] = useState(0);
  let [Rmbcost, setRmbcost] = useState(0);
  let [summonCounter, setsummonCounter] = useState(0);
  function addRmbcost(level) {
    if (level === 1) {
      setRmbcost((prev) => prev + 154);
      setStarnum((prev) => prev + 2500);
    } else if (level === 2) {
      setRmbcost((prev) => prev + 1540);
      setStarnum((prev) => prev + 25000);
    }
  }
  function drawonce() {
    if (Starnum < 250) {
      alert("星石不足，请充值！");
    } else {
      setStarnum((prev) => prev - 250);
      setsummonCounter((prev) => prev + 1);
      // 生成1-1000随机数
      let index = drawRate(1000);
      //这次抽中的卡结果
      let [catlog, result] = jugRate(index);
      setDisplayResult([result]);
      if (catlog === 3) {
        set3lists((prev) => [...prev, result]);
      } else if (catlog === 4) {
        set4lists((prev) => [...prev, result]);
      }
      if (result === upCards[0] || result === upCards[1]) {
        alert("恭喜抽到当期限定四星");
      }
      if (result === upCards[2]) {
        alert("恭喜抽到当期限定三星");
      }
    }
    if (summonCounter === 300) {
      alert("三百抽井了，下池需谨慎！");
      emptyRecord();
    }
  }
  function drawtentimes() {
    if (Starnum < 2500) {
      alert("星石不足，请充值！");
    } else {
      setStarnum((prev) => prev - 2500);
      setsummonCounter((prev) => prev + 10);
      // 生成9次抽取结果
      let flag = false;
      let temp = [];
      for (let i = 0; i < 9; ++i) {
        // 生成1-1000随机数
        let index = drawRate(1000);
        //这次抽中的卡结果
        let [catlog, result] = jugRate(index);
        temp.push(result);
        if (catlog === 3) {
          set3lists((prev) => [...prev, result]);
          flag = true;
        } else if (catlog === 4) {
          set4lists((prev) => [...prev, result]);
          flag = true;
        }
      }
      console.log(temp);
      if (!flag) {
        setBaodiTimes((prev) => prev + 1);
        let randnum = drawRate(100);
        let index;
        if (randnum < 4) {
          index = drawRate(30);
        } else {
          index = drawRate(86) + 30;
        }
        let [catlog, result] = jugRate(index);
        temp.push(result);
        if (catlog === 3) {
          set3lists((prev) => [...prev, result]);
        } else if (catlog === 4) {
          set4lists((prev) => [...prev, result]);
        }
      } else {
        // 生成1-1000随机数
        let index = drawRate(1000);
        //这次抽中的卡结果
        let [catlog, result] = jugRate(index);
        temp.push(result);
        if (catlog === 3) {
          set3lists((prev) => [...prev, result]);
        } else if (catlog === 4) {
          set4lists((prev) => [...prev, result]);
        }
      }
      setDisplayResult(temp);
      for (let i = 0; i < 10; ++i) {
        if (temp[i] === upCards[0] || temp[i] === upCards[1]) {
          alert("恭喜抽到当期限定四星");
        }
        if (temp[i] === upCards[2]) {
          alert("恭喜抽到当期限定三星");
        }
      }
      if (summonCounter >= 300) {
        alert("三百抽井了，下池需谨慎！");
        emptyRecord();
      }
    }
  }
  //根据抽取结果数展示卡面
  function showCards() {
    const len = displayResult.length;
    if (len === 1) {
      let [temp] = displayResult;
      return <img src={temp} alt="card" id="show-Card" />;
    } else if (len === 10) {
      let temp = displayResult;
      return temp.map((v, i) => (
        <img src={v} alt="card" id={"show-Cards-" + i} />
      ));
    }
    return "";
  }
  //根据num值判断是什么卡
  function jugRate(num) {
    //1-7第一张up四星
    if (num < 8) {
      return [4, upCards[0]];
      //8-14第二张up四星
    } else if (num < 15) {
      return [4, upCards[1]];
      //15-30其他四星
    } else if (num < 31) {
      let index = drawRate(goldenCards.length) - 1;
      return [4, goldenCards[index]];
      //31-42 up三星
    } else if (num < 43) {
      return [3, upCards[2]];
      //43-116其他三星
    } else if (num < 117) {
      let index = drawRate(silverCards.length) - 1;
      return [3, silverCards[index]];
    } else {
      let index = drawRate(copperCards.length) - 1;
      return [2, copperCards[index]];
    }
  }
  // 生成1-range随机整数
  function drawRate(range) {
    return Math.floor(Math.random() * (range - 1)) + 1;
  }
  function emptyRecord() {
    set3lists([]);
    set4lists([]);
    setRmbcost(0);
    setStarnum(0);
    setsummonCounter(0);
    setBaodiTimes(0);
    setDisplayResult(0);
  }
  return (
    <div>
      <div className="carddraw">
        <div className="carddraw-activity">
          <img
            src="https://e.im5i.com/2021/09/07/Am92X.jpg"
            alt="carddraw-activity"
            className="carddraw-activity-pic"
          />
        </div>
        <div className="carddraw-rmbconsume">
          <span className="hold-info">
            <img
              src="https://e.im5i.com/2021/09/07/Am7Eh.png"
              alt="starstone"
            />
            <span>所持星石数</span>
            <p>
              <center>{Starnum}</center>
            </p>
          </span>
          <span className="hold-info-rmb">
            <span>已消耗人民币(￥)</span>
            <p>
              <center>{Rmbcost}</center>
            </p>
          </span>
          <span className="get-paid">
            <button
              onClick={() => addRmbcost(1)}
              type="button"
              class="btn btn-primary get-paid-button"
            >
              ￥154
            </button>
            <button
              onClick={() => addRmbcost(2)}
              type="button"
              class="btn btn-danger get-paid-button"
            >
              ￥1540
            </button>
          </span>
        </div>
        <div className="carddraw-result">
          <img
            src="https://e.im5i.com/2021/09/07/AmzAy.png"
            alt="result-background"
          />
          {showCards()}
        </div>
        <div className="carddraw-button">
          <span>
            <img
              id="draw-button-1"
              src="https://e.im5i.com/2021/09/07/AmbaD.png"
              alt="ten-once"
              onClick={drawonce}
            />
            <img
              id="draw-button-2"
              src="https://e.im5i.com/2021/09/07/AmSvf.png"
              alt="ten-draw"
              onClick={drawtentimes}
            />
          </span>
        </div>
        <div class="carddraw-panel-body">
          <span>
            召唤次数：{summonCounter ? summonCounter : " "}
            <br />
            保底计数：{baodiTimes ? baodiTimes : " "}
          </span>
          <button class="btn btn-outline-danger" onClick={emptyRecord}>
            清空历史纪录
          </button>
        </div>
      </div>
      <CardDrawDisplay
        summonFourlists={summonFourlists}
        summonThreelists={summonThreelists}
        summonTimes={summonCounter}
      />
    </div>
  );
}
export default CardDrawPart;
