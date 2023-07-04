import React, { useState } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredient) => [
      ...prevIngredient,
      { id: Math.random().toString(), ...ingredient },
    ]);
  };

  const removeIngredientHandler = (id) => {
    setUserIngredients((userIngredients) => {
      return userIngredients.filter((ingredient) => ingredient.id !== id);
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
