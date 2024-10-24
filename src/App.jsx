import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Preparings from "./components/Preparings/Preparings";
import Recipes from "./components/Recipes/Recipes";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [cards, setCards] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [currently, setCurrently] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleWantToCook = (cookData) => {
    const isHandleCook = cooks.find(
      (cook) => cook.recipe_id === cookData.recipe_id
    );
    if (!isHandleCook) {
      const newCooks = [...cooks, cookData];
      setCooks(newCooks);
    } else {
      toast.error("Already added this item!", { autoClose: 1500 });
    }
  };

  const handlePreparing = (cook) => {
    const newCook = [...currently, cook];
    const isRemaining = cooks.filter(
      (cookData) => cookData.recipe_id !== cook.recipe_id
    );

    setCooks(isRemaining);
    setCurrently(newCook);
  };

  return (
    <div className="w-11/12 mx-auto pt-10">
      {/* Recipes */}
      <Recipes></Recipes>
      <div className="flex flex-col lg:flex-row gap-8 pt-10">
        <Cards cards={cards} handleWantToCook={handleWantToCook}></Cards>
        <Preparings
          cooks={cooks}
          handlePreparing={handlePreparing}
          currently={currently}
        ></Preparings>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
