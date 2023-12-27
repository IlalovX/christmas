import { useAppDispatch } from "../../../helpers/helpers";
import { selectBG } from "../../../store/slice/treeSlice";

import styles from "./choice-bg.module.scss";

const indexBG: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function index() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>ВЫБЕРИТЕ ФОН</h1>
      <div className={styles.container}>
        {indexBG.map((el) => (
          <div
            className={styles.box}
            key={el}
            onClick={() => {
              dispatch(selectBG(el));
            }}
          >
            <img
              src={`https://christmas-tasks.netlify.app/assets/bg/${el}.jpg`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
