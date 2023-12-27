import { Fragment } from "react";

import { useAppSelector } from "../../../helpers/helpers";

import styles from "./favorite-toys.module.scss";

function index() {
  const arr = useAppSelector((state) => state.toys.favoriteArr);

  return (
    <Fragment>
      <h1>Игрушки</h1>
      <div className={styles.container}>
        {arr.map((el) => (
          <div className={styles.box} key={el?.num}>
            <img
              src={`https://christmas-tasks.netlify.app/assets/toys/${el?.num}.png`}
              alt=""
            />
            <span>{el.count}</span>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default index;
