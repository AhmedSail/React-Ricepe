import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [FoodId, setFoodId] = useState("715415");

  return (
    <>
      <div>
        <Header />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <FoodList
              setFoodId={setFoodId}
              foodData={foodData}
              setFoodData={setFoodData}
            />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails FoodId={FoodId} />
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
