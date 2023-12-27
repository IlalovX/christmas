import Head from "../../components/header/Header";
import Filters from "../../components/toys-filters/toysFilters";
import Body from "../../components/toys-body/ToysBody";
function Toys() {
  return (
    <div>
      <Head />
      <div
        style={{
          height: "100%",
          padding: "30px",
        }}
      >
        <Filters />
        <Body />
      </div>
    </div>
  );
}

export default Toys;
