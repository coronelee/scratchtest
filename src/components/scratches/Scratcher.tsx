import { useState, useEffect } from "react";
import styles from "../styles/scratches.module.scss";
import base from "./base";
export default function Scratcher() {
  const [scale, setScale] = useState(0);
  const [array, setArray] = useState(base);
  const [money, setMoney] = useState<number>(0);
  const [scratchedItems] = useState<number[]>([]);
  const [openCongr, setOpenCongr] = useState(false);
  const [openError, setOpenError] = useState(false);

  if (openCongr) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
  const scaleUpgrade = (value: any, id: number) => {
    if (scratchedItems.includes(id)) {
    } else {
      if (value == 25) {
        setScale(scale + 5);
        setMoney(money + value);
        setOpenCongr(!openCongr);
        scratchedItems.push(id);
      } else if (value == 100) {
        setScale(scale + 20);
        setMoney(money + value);
        setOpenCongr(!openCongr);
        scratchedItems.push(id);
      } else if (value == 150) {
        setScale(scale + 30);
        setMoney(money + value);
        setOpenCongr(!openCongr);
        scratchedItems.push(id);
      } else if (value == "empty") {
        setOpenError(!openError);
      }
    }
  };
  let arr;
  let randomArr;
  useEffect(() => {
    arr = [...base];
    randomArr = arr.sort(() => 0.5 - Math.random());
    setArray(randomArr);
  }, []);

  const refresh = () => {
    arr = [...base];
    randomArr = arr.sort(() => 0.5 - Math.random());
    setArray(randomArr);
    for (let i = 0; i < 13; i++) {
      let item = document.getElementById(i + "");
      item?.style.setProperty("display", "block");
    }

    scratchedItems.splice(0, arr.length);
    setScale(0)
    setMoney(0);
    setOpenError(false);
  };

  const linear25 =
    "linear-gradient(135.72deg, #EC4F74CC 5.89%, #FF9DB5CC 20.95%, #EC4F74CC 35.55%, #B92D4ECC 50.15%, #EC4F74CC 64.3%, #FFA5BACC 77.99%, #EC4F74CC 93.5%), url('/public/pattern.png')";
  const linear100 =
    "linear-gradient(136.38deg, #854AAAcc 5.28%, #BD78C9cc 20.78%, #854AAAcc 34.87%, #4D2680cc 50.37%, #854AAAcc 65.88%, #B97EC8cc 80.44%, #854AAAcc 95.47%), url('/public/pattern.png')";
  const linear150 =
    "linear-gradient(135.62deg, #E79AD6cc 5.14%, #FFCAF3cc 19.7%, #E79AD6cc 34.26%, #DC74D2cc 50.23%, #E79AD6cc 65.26%, #FFD5F6cc 80.76%, #E79AD6cc 95.32%), url('/public/pattern.png')";
  const empty =
    "linear-gradient(135.62deg, #CDCDCDcc 0%, #CDCDCDcc 100%), url('/public/pattern.png')";
  const buttonActive =
    "linear-gradient(136.38deg, #854aaa 5.28%, #bd78c9 20.78%, #854aaa 34.87%,#4d2680 50.37%,#854aaa 65.88%, #b97ec8 80.44%,#854aaa 95.47%), url('/public/pattern.png')";
  const buttonNotActive =
    "linear-gradient(136.38deg, #854aaa80 5.28%, #bd78c980 20.78%, #854aaa80 34.87%,#4d268080 50.37%,#854aaa80 65.88%, #b97ec880 80.44%,#854aaa80 95.47%), url('/public/pattern.png')";

  const errorModal =
    "linear-gradient(116.9deg, #FF6948 0%, #FF8B8B 24.48%, #FF6948 48.96%, #FFBD80 75%, #FF6948 100%)";
  const congrModal =
    "linear-gradient(116.9deg, #88FF5F 0%, #BAFFA2 24.48%, #BAFFA2 48.96%, #9FF136 75%, #88FF5F 100%)";
  const congrallModal =
    "linear-gradient(116.9deg, #9DDCFF 0%, #74BBFC 25%, #9DDCFF 50%, #CFFFFF 77.6%, #9DDCFF 100%)";

  const scratchItem = (id: number) => {
    let item = document.getElementById(id + "");
    item?.style.setProperty("display", "none");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__scale}>
        <div className={styles.scale__scale}>
          <span>{money}/500$</span>
          <div style={{ width: scale + "%" }}></div>
        </div>
        <div
          className={styles.scale__button}
          style={
            money == 500
              ? {
                  background: buttonActive,
                }
              : {
                  background: buttonNotActive,
                }
          }
        >
          Get 500$
        </div>
      </div>

      <div className={styles.wrapper__scratchBlock}>
        {openCongr ? (
          <div className={styles.scratchBlock__congratulations}>
            <div style={{ background: congrModal }}>
              <span>CONGRATULATES!</span>
              <span>The bonus is already on your balance! :)</span>
              <button onClick={() => setOpenCongr(!openCongr)}>NEXT</button>
            </div>
          </div>
        ) : (
          ""
        )}
        {money == 500 ? (
          <div
            id="congratulations"
            className={styles.scratchBlock__congratulations}
          >
            <div style={{ background: congrallModal }}>
              <span>WOOOW!</span>
              <span>You collected 500$</span>
              <button
                onClick={() =>
                  document
                    .getElementById("congratulations")
                    ?.style.setProperty("display", "none")
                }
              >
                get 500$
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {openError ? (
          <div className={styles.scratchBlock__congratulations}>
            <div style={{ background: errorModal }}>
              <span>OH NO! :(</span>
              <span>But don’t get upset!</span>
              <button onClick={() => refresh()}>TRY AGAIN</button>
            </div>
          </div>
        ) : (
          ""
        )}
        {array.map((base) => (
          <div className={styles.item}>
            <div
              id={base.id + ""}
              className={styles.unScratchItem}
              onClick={() => {
                scratchItem(base.id);
                scaleUpgrade(base.value, base.id);
              }}
            >
              <div>
                <span>scratch surface</span>
                <span>$</span>
                <span>SCRATCH ME TO FIND MONEY</span>
              </div>
            </div>
            <div
              className={styles.scratchItem}
              style={
                base.value == 25
                  ? { background: linear25 }
                  : base.value == 100
                  ? { background: linear100 }
                  : base.value == 150
                  ? { background: linear150 }
                  : { background: empty }
              }
            >
              <span style={base.value == "empty" ? { outline: 0 } : {}}>
                <span>
                  {base.value}
                  {base.currency}
                </span>
                <span style={base.value == "empty" ? { display: "none" } : {}}>
                  {" "}
                  <p>YES!</p>you found money
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
