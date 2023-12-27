import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../helpers/helpers";
import { selectCount, selectYear } from "../../../store/slice/toysSlice";

import styles from "./quantity-filter.module.scss";

function index() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const storeYear = useAppSelector((state) => state.toys.year);
  const storeCount = useAppSelector((state) => state.toys.count);

  return (
    <div className={styles.body}>
      <h1>ФИЛЬТР ПО ДИАПАЗОНУ</h1>
      <div className={styles.filter}>
        <div className={styles.container}>
          <p>Количество экземпляров :</p>
          <div className={styles.range}>
            <span>1</span>
            <input
              type="range"
              value={storeCount}
              min={1}
              max={12}
              onChange={(e) => {
                dispatch(selectCount(e.target.value));
                setSearchParams((prev) => {
                  prev.set("count", e.target.value);
                  return prev;
                });
              }}
            />
            <span>12</span>
          </div>
        </div>
        <div className={styles.container}>
          <p>Год приобретения :</p>
          <div className={styles.range}>
            <span>1940</span>
            <input
              type="range"
              value={storeYear}
              min={1940}
              max={2020}
              step={10}
              onChange={(e) => {
                dispatch(selectYear(e.target.value));
                setSearchParams((prev) => {
                  prev.set("years", e.target.value);
                  return prev;
                });
              }}
            />
            <span>2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
