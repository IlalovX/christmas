import ChoiceTree from "../tree-filters/choice-tree/ChoiceTree";
import ChoiceBG from "../tree-filters/choice-bg/ChoiceBg";
import ChoiceGarland from "../tree-filters/choice-garland/ChoiceGarland";
import Effects from "../tree-filters/effects/Effects";
import MainTree from "./main-tree/MainTree";
import FavoriteToys from "./favorite-toys/FavoriteToys";
import DressedTree from "./dressed-tree/DressedTree";
function treeBody() {
  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <div>
        <Effects />
        <ChoiceTree />
        <ChoiceBG />
        <ChoiceGarland />
      </div>
      <div>
        <MainTree />
      </div>
      <div>
        <FavoriteToys />
        <DressedTree />
      </div>
    </div>
  );
}

export default treeBody;
