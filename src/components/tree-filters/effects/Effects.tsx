import { Fragment } from "react";

import { useAppDispatch, useAppSelector } from "../../../helpers/helpers";
import { statusAudio, statusSnow } from "../../../store/slice/treeSlice";

// svg
import Sound from "../../../assets/svg/audio.svg";
import Mute from "../../../assets/svg/mute.svg";
import Snow from "../../../assets/svg/snowflake.svg";

// sound
import sound from "../../../assets/audio/audio.mp3";

import styles from "./effects.module.scss";

function index() {
  const audioStatus = useAppSelector((state) => state.tree.audioStatus);
  const snowStatus = useAppSelector((state) => state.tree.snowStatus);
  const dispatch = useAppDispatch();
  const audio = new Audio(sound);

  if (audioStatus) {
    audio.play();
  } else {
    audio.pause();
  }
  return (
    <Fragment>
      <div className={styles.container}>
        <img
          src={audioStatus ? Sound : Mute}
          onClick={() => dispatch(statusAudio())}
        />
        <img
          src={Snow}
          alt=""
          onClick={() => dispatch(statusSnow())}
          style={snowStatus ? { opacity: "0.5" } : {}}
        />
      </div>
    </Fragment>
  );
}

export default index;
