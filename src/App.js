import React from "react";
import "./styles.css";
import CardMakeUp from "./component/CardMakeUp";
import Filters from "./component/Filters";
export default function App() {
  return (
    <div>
      <Filters />
      <CardMakeUp filters={{ tags: "Vegan" }} />
    </div>
  );
}
