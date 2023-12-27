import { Fragment } from "react";

import { useAppDispatch } from "../../../helpers/helpers";
import { selectTree } from "../../../store/slice/treeSlice";

import styles from "./choice-tree.module.scss";

const indexTree: number[] = [1, 2, 3, 4, 5, 6];

function index() {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <h1>ВЫБЕРИТЕ ЁЛКУ</h1>
      <div className={styles.container}>
        {indexTree.map((el) => (
          <div
            className={styles.box}
            onClick={() => dispatch(selectTree(el))}
            key={el}
          >
            <img
              src={`https://christmas-tasks.netlify.app/assets/tree/${el}.png`}
              alt=""
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default index;
