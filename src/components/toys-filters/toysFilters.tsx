import ValueFilter from "./value-filter/ValueFilter";
import QuantityFilter from "./quantity-filter/QuantityFilter";
import NameFilter from "./name-filter/NameFilter";

import styles from "./toysFilters.module.scss";

function toysBody() {
  return (
    <div className={styles.body}>
      <div className={styles.filters}>
        <ValueFilter />
        <QuantityFilter />
        <NameFilter />
      </div>
    </div>
  );
}

export default toysBody;
