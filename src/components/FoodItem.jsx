import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.box}>
      <img className={styles.img} src={food.image} alt="" />
      <div className={styles.content}>
        <h1 className={styles.txt}>{food.title}</h1>
      </div>
      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.btn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
