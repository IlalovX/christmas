import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../helpers/helpers";
import { filteredData, selectLikes } from "../../../store/slice/toysSlice";

import Ball from "../../../assets/svg/ball.svg";
import Cone from "../../../assets/svg/cone.svg";
import Snow from "../../../assets/svg/snow.svg";
import Bell from "../../../assets/svg/bell.svg";
import Toy from "../../../assets/svg/toy.svg";

import styles from "./value-filter.module.scss";

const svgURL = [Ball, Cone, Snow, Bell, Toy];
const SHAPES = ["шар", "шишка", "снежинка", "колокольчик", "фигурка"];
const BgColors = ["white", "yellow", "red", "blue", "green"];
const COLORS = ["белый", "желтый", "красный", "синий", "зелёный"];
const SIZE = ["большой", "средний", "малый"];

function index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const parsed = queryString.parse(location.search, { arrayFormat: "bracket" });
  const checked = useAppSelector((state) => state.toys.likesArr) as boolean;
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(parsed));
  }, [searchParams]);

  function filter(item: string, type: string) {
    let params: string[] = searchParams.get(type)?.split(",") || [];
    if (params[0] === "") {
      params = params.slice(1);
    }
    if (params.indexOf(item) === -1) {
      params?.push(item);
    } else {
      const arr = params.filter((el) => {
        if (item === el) {
          return false;
        } else {
          return true;
        }
      });
      params = [...arr];
    }
    const str = params.join(",");
    let newSearch = {
      ...queryString.parse(search),
      [type]: str,
    };

    navigate({ search: queryString.stringify(newSearch) });

    dispatch(filteredData(newSearch));
  }

  return (
    <div className={styles.body}>
      <h1>ФИЛЬТРЫЙ ПО ЗНАЧЕНИЮ</h1>
      <div className={styles.filter}>
        <div className={styles.container}>
          <span>Форма :</span>
          {SHAPES.map((el, index) => (
            <img
              key={index}
              src={svgURL[index]}
              onClick={() => {
                filter(el, "shape");
              }}
            />
          ))}
        </div>
        <div className={styles.container}>
          <span>Цвет :</span>
          {BgColors.map((el, index) => (
            <div
              key={index}
              className={styles.color}
              style={{ backgroundColor: el }}
              onClick={() => {
                filter(COLORS[index], "color");
              }}
            ></div>
          ))}
        </div>
        <div className={styles.size}>
          <span>Размер :</span>
          {SIZE.map((el, index) => (
            <img
              key={index}
              src={Ball}
              width={52 - 10 * index}
              height={52 - 10 * index}
              onClick={() => {
                filter(el, "size");
              }}
            />
          ))}
        </div>
        <div className={styles.like}>
          <span>Только любимые : </span>
          <input
            type="checkbox"
            checked={checked}
            onClick={() => dispatch(selectLikes())}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
