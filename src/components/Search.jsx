import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "79321589bcf941f086cbcce7fddb0b31";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  //syntax of the use effect hook
  //   useEffect(() => {}, []);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Enter needed food..."
      />
    </div>
  );
}
