import { Fragment } from "react";

import {
  statusGarland,
  selectGarlandColor,
} from "../../../store/slice/treeSlice";
import { useAppDispatch, useAppSelector } from "../../../helpers/helpers";

import styles from "./choice-garland.module.scss";

const linear: string =
  "linear-gradient(124deg, rgb(255, 36, 0), rgb(232, 29, 29), rgb(232, 183, 29), rgb(227, 232, 29), rgb(29, 232, 64), rgb(29, 221, 232), rgb(43, 29, 232))";
const COLORS: string[] = [linear, "red", "blue", "yellow", "green"];

function index() {
  const dispatch = useAppDispatch();
  const garlandStatus = useAppSelector((state) => state.tree.garlandStatus);

  return (
    <Fragment>
      <h1>ГИРЛЯНДА</h1>
      <div className={styles.container}>
        {COLORS.map((el) => (
          <div
            key={el}
            onClick={() => dispatch(selectGarlandColor(el))}
            className={styles.box}
            style={{ background: el }}
          ></div>
        ))}
        {garlandStatus ? (
          <button onClick={() => dispatch(statusGarland(false))}>OFF</button>
        ) : (
          <button onClick={() => dispatch(statusGarland(true))}>ON</button>
        )}
      </div>
    </Fragment>
  );
}

export default index;
