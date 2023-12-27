import { Fragment } from "react";

import { useAppSelector } from "../../../helpers/helpers";

import styles from "./garland.module.scss";

function index() {
  const status = useAppSelector((state) => state.tree.garlandStatus);
  let color = useAppSelector((state) => state.tree.garlandColor);
  if (
    color ===
    "linear-gradient(124deg, rgb(255, 36, 0), rgb(232, 29, 29), rgb(232, 183, 29), rgb(227, 232, 29), rgb(29, 232, 64), rgb(29, 221, 232), rgb(43, 29, 232))"
  ) {
    color = "linear";
  }

  return (
    <Fragment>
      {status && (
        <div className={styles.main}>
          <ul style={{ margin: "80px 0 0 0" }} className={styles[color]}>
            <li style={{ left: "0", top: "0" }}></li>
            <li style={{ left: "10px", top: "7px" }}></li>
            <li style={{ left: "20px", top: "15px" }}></li>
            <li style={{ left: "30px", top: "23px" }}></li>
            <li style={{ left: "40px", top: "25px" }}></li>
            <li style={{ left: "50px", top: "28px" }}></li>
            <li style={{ left: "60px", top: "29px" }}></li>
            <li style={{ left: "70px", top: "28px" }}></li>
            <li style={{ left: "80px", top: "25px" }}></li>
            <li style={{ left: "90px", top: "23px" }}></li>
            <li style={{ left: "100px", top: "15px" }}></li>
            <li style={{ left: "110px", top: "7px" }}></li>
            <li style={{ left: "120px", top: "0px" }}></li>
          </ul>
          <ul
            className={styles[color]}
            style={{ margin: "80px  0 0 0 ", left: "-50px" }}
          >
            <li style={{ left: "0", top: "0" }}></li>
            <li style={{ left: "10px", top: "6px" }}></li>
            <li style={{ left: "20px", top: "12px" }}></li>
            <li style={{ left: "30px", top: "18px" }}></li>
            <li style={{ left: "40px", top: "24px" }}></li>
            <li style={{ left: "50px", top: "30px" }}></li>
            <li style={{ left: "60px", top: "36px" }}></li>
            <li style={{ left: "70px", top: "42px" }}></li>
            <li style={{ left: "80px", top: "44px" }}></li>
            <li style={{ left: "90px", top: "46px" }}></li>
            <li style={{ left: "100px", top: "48px" }}></li>
            <li style={{ left: "110px", top: "50px" }}></li>
            <li style={{ left: "120px", top: "48px" }}></li>
            <li style={{ left: "130px", top: "46px" }}></li>
            <li style={{ left: "140px", top: "44px" }}></li>
            <li style={{ left: "150px", top: "42px" }}></li>
            <li style={{ left: "160px", top: "36px" }}></li>
            <li style={{ left: "170px", top: "30px" }}></li>
            <li style={{ left: "180px", top: "24px" }}></li>
            <li style={{ left: "190px", top: "18px" }}></li>
            <li style={{ left: "200px", top: "12px" }}></li>
            <li style={{ left: "210px", top: "6px" }}></li>
            <li style={{ left: "220px", top: "0px" }}></li>
          </ul>
          <ul
            className={styles[color]}
            style={{ marginTop: "100px", left: "-100px" }}
          >
            <li style={{ left: "0px", top: "0px" }}></li>
            <li style={{ left: "10px", top: "6px" }}></li>
            <li style={{ left: "20px", top: "12px" }}></li>
            <li style={{ left: "30px", top: "18px" }}></li>
            <li style={{ left: "40px", top: "24px" }}></li>
            <li style={{ left: "50px", top: "30px" }}></li>
            <li style={{ left: "60px", top: "36px" }}></li>
            <li style={{ left: "70px", top: "42px" }}></li>
            <li style={{ left: "80px", top: "48px" }}></li>
            <li style={{ left: "90px", top: "54px" }}></li>
            <li style={{ left: "100px", top: "60px" }}></li>
            <li style={{ left: "110px", top: "66px" }}></li>
            <li style={{ left: "120px", top: "70px" }}></li>
            <li style={{ left: "130px", top: "72px" }}></li>
            <li style={{ left: "140px", top: "74px" }}></li>
            <li style={{ left: "150px", top: "76px" }}></li>
            <li style={{ left: "160px", top: "78px" }}></li>
            <li style={{ left: "170px", top: "80px" }}></li>
            <li style={{ left: "180px", top: "78px" }}></li>
            <li style={{ left: "190px", top: "76px" }}></li>
            <li style={{ left: "200px", top: "74px" }}></li>
            <li style={{ left: "210px", top: "72px" }}></li>
            <li style={{ left: "220px", top: "70px" }}></li>
            <li style={{ left: "230px", top: "66px" }}></li>
            <li style={{ left: "240px", top: "60px" }}></li>
            <li style={{ left: "250px", top: "54px" }}></li>
            <li style={{ left: "260px", top: "48px" }}></li>
            <li style={{ left: "270px", top: "42px" }}></li>
            <li style={{ left: "280px", top: "36px" }}></li>
            <li style={{ left: "290px", top: "30px" }}></li>
            <li style={{ left: "300px", top: "24px" }}></li>
            <li style={{ left: "310px", top: "18px" }}></li>
            <li style={{ left: "320px", top: "12px" }}></li>
            <li style={{ left: "330px", top: "6px" }}></li>
            <li style={{ left: "340px", top: "0px" }}></li>
          </ul>
          <ul
            className={styles[color]}
            style={{ marginTop: "150px", left: "-170px" }}
          >
            <li style={{ left: "0px", top: "0px" }}></li>
            <li style={{ left: "10px", top: "6px" }}></li>
            <li style={{ left: "20px", top: "12px" }}></li>
            <li style={{ left: "30px", top: "18px" }}></li>
            <li style={{ left: "40px", top: "24px" }}></li>
            <li style={{ left: "50px", top: "30px" }}></li>
            <li style={{ left: "60px", top: "36px" }}></li>
            <li style={{ left: "70px", top: "42px" }}></li>
            <li style={{ left: "80px", top: "48px" }}></li>
            <li style={{ left: "90px", top: "54px" }}></li>
            <li style={{ left: "100px", top: "60px" }}></li>
            <li style={{ left: "110px", top: "66px" }}></li>
            <li style={{ left: "120px", top: "72px" }}></li>
            <li style={{ left: "130px", top: "78px" }}></li>
            <li style={{ left: "140px", top: "84px" }}></li>
            <li style={{ left: "150px", top: "90px" }}></li>
            <li style={{ left: "160px", top: "91px" }}></li>
            <li style={{ left: "170px", top: "92px" }}></li>
            <li style={{ left: "180px", top: "93px" }}></li>
            <li style={{ left: "190px", top: "94px" }}></li>
            <li style={{ left: "200px", top: "95px" }}></li>
            <li style={{ left: "210px", top: "96px" }}></li>
            <li style={{ left: "220px", top: "97px" }}></li>
            <li style={{ left: "230px", top: "98px" }}></li>
            <li style={{ left: "240px", top: "97px" }}></li>
            <li style={{ left: "250px", top: "96px" }}></li>
            <li style={{ left: "260px", top: "95px" }}></li>
            <li style={{ left: "270px", top: "94px" }}></li>
            <li style={{ left: "280px", top: "93px" }}></li>
            <li style={{ left: "290px", top: "92px" }}></li>
            <li style={{ left: "300px", top: "91px" }}></li>
            <li style={{ left: "310px", top: "90px" }}></li>
            <li style={{ left: "320px", top: "84px" }}></li>
            <li style={{ left: "330px", top: "78px" }}></li>
            <li style={{ left: "340px", top: "72px" }}></li>
            <li style={{ left: "350px", top: "66px" }}></li>
            <li style={{ left: "360px", top: "60px" }}></li>
            <li style={{ left: "370px", top: "54px" }}></li>
            <li style={{ left: "380px", top: "48px" }}></li>
            <li style={{ left: "390px", top: "42px" }}></li>
            <li style={{ left: "400px", top: "36px" }}></li>
            <li style={{ left: "410px", top: "30px" }}></li>
            <li style={{ left: "420px", top: "24px" }}></li>
            <li style={{ left: "430px", top: "18px" }}></li>
            <li style={{ left: "440px", top: "12px" }}></li>
            <li style={{ left: "450px", top: "6px" }}></li>
            <li style={{ left: "460px", top: "0px" }}></li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default index;
