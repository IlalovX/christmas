import { NavLink } from "react-router-dom";

import styles from "./home-body.module.scss";

function index() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <p>Новогодная игра</p>
          <p>Наряди ёлку</p>
        </div>
        <NavLink to="/toys">Начать</NavLink>
      </div>
    </div>
  );
}

export default index;
