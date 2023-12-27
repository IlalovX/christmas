import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "../../helpers/helpers";
import { selectFavorite } from "../../store/slice/toysSlice";

import styles from "./toys-body.module.scss";

function index() {
  const arr = useAppSelector((state) => state.toys.array);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.body}>
      {arr.map((el) => (
        <div className={styles.box} key={el?.num}>
          <div className={styles.name}>
            <h1>{el?.name}</h1>
            {el?.favorite ? (
              <span
                onClick={() => dispatch(selectFavorite(el?.num))}
                style={{ cursor: "pointer" }}
              >
                <AiTwotoneHeart />
              </span>
            ) : (
              <span onClick={() => dispatch(selectFavorite(el?.num))}>
                <AiOutlineHeart />
              </span>
            )}
          </div>
          <div className={styles.container}>
            <img
              src={`https://christmas-tasks.netlify.app/assets/toys/${el?.num}.png`}
              alt="img"
            />
            <div className={styles.text}>
              <p>Количество : {el?.count}</p>
              <p>Год покупки : {el?.year}</p>
              <p>Форма : {el?.shape}</p>
              <p>Цвет : {el?.color}</p>
              <p>Размер : {el?.size}</p>
              <p>Любимая : {el?.favorite ? "Да" : "Нет"}</p>
            </div>
          </div>
        </div>
      ))}
      {arr.length === 0 && (
        <div className={styles.error__container}>
          <h1>Please restart filters</h1>
        </div>
      )}
    </div>
  );
}

export default index;
