import { Fragment } from "react";

import { useAppSelector } from "../../../helpers/helpers";
import Garland from "../garland/Garland";
import Snow from "../../tree-filters/effects/snow-effects/SnowEffects";

import styles from "./main-tree.module.scss";

function index() {
  const localBG = useAppSelector((state) => state.tree.imgBG);
  const localTree = useAppSelector((state) => state.tree.tree);
  const statusSnow = useAppSelector((state) => state.tree.snowStatus);

  return (
    <Fragment>
      <div
        className={styles.container}
        style={
          localBG
            ? {
                backgroundImage: `url(https://christmas-tasks.netlify.app/assets/bg/${localBG}.jpg)`,
                zIndex: 1,
              }
            : {}
        }
      >
        {localTree && (
          <img
            src={`https://christmas-tasks.netlify.app/assets/tree/${localTree}.png`}
            style={{ zIndex: 2 }}
          />
        )}
        <Garland />
      </div>
      {statusSnow && <Snow />}
    </Fragment>
  );
}

export default index;
