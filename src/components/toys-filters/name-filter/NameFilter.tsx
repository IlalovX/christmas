import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

import { useAppDispatch } from "../../../helpers/helpers";
import {
  resetArr,
  sortAscending,
  sortDescending,
  sortEndName,
  sortStartName,
} from "../../../store/slice/toysSlice";

import styles from "./name-filter.module.scss";

function index() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.body}>
      <h1>Сортировка : </h1>
      <div className={styles.filter}>
        {open ? (
          <button onClick={() => setOpen(!open)}>
            По названию от А до Я <BiCaretDown />
          </button>
        ) : (
          <button onClick={() => setOpen(!open)}>
            По названию от А до Я <BiCaretUp />
          </button>
        )}
      </div>
      <div
        className={styles.options}
        style={!open ? { display: "block" } : { display: "none" }}
      >
        <p onClick={() => dispatch(sortStartName())}>По названию от А до Я </p>
        <p onClick={() => dispatch(sortEndName())}>По названию от Я до А </p>
        <p onClick={() => dispatch(sortAscending())}>
          По количеству возрастанию
        </p>
        <p onClick={() => dispatch(sortDescending())}>По количеству убыванию</p>
      </div>
      <div className={styles.restart}>
        <button
          onClick={() => {
            dispatch(resetArr());
            setSearchParams((prev) => {
              prev.delete("color");
              prev.delete("size");
              prev.delete("shape");
              prev.delete("count");
              prev.delete("years");
              return prev;
            });
          }}
        >
          Сброс фильтров
        </button>
      </div>
    </div>
  );
}

export default index;
