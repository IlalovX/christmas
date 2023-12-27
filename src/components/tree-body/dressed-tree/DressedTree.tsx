import styles from "./dressed-tree.module.scss";

const indexTree: number[] = [1, 2, 3, 4, 5, 6];

function index() {
  return (
    <div>
      <h1>ВЫ НАРЯДИЛИ</h1>
      <div className={styles.container}>
        {indexTree.map((el) => (
          <div className={styles.box} key={el}>
            <img
              src={`https://christmas-tasks.netlify.app/assets/tree/${el}.png`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
