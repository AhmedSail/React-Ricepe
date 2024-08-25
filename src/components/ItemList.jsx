import Item from "./Item";

export default function ItemList({ Food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        Food.extendedIngredients.map((item) => (
          <Item item={item} key={item.id} />
        ))
      )}
    </div>
  );
}
