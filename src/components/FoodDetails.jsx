import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ FoodId }) {
  const [Food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
  const API_KEY = "79321589bcf941f086cbcce7fddb0b31";
  useEffect(() => {
    async function FetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    FetchFood();
  }, [FoodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{Food.title}</h1>
        <img className={styles.recipeImage} src={Food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕗{Food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            🧑‍🤝‍🧑<strong>Serves {Food.servings}</strong>
          </span>
          <span>
            <strong>
              {Food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{Food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {Food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          <ItemList Food={Food} isLoading={isLoading} />
        </div>
        <div className={styles.recipeInstructions}>
          <h2>Instructions</h2>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              Food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
