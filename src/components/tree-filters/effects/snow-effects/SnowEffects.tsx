import Snowfall from "react-snowfall";
import { Fragment } from "react";

import styles from "./snow-effects.module.scss";
function index() {
  return (
    <Fragment>
      <div className={styles.snowflakes}>
        <Snowfall />
      </div>
    </Fragment>
  );
}

export default index;
