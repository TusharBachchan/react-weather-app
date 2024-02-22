import { useState } from "react";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Forecast from "./components/Forecast";
function App() {
  return (
    <div className="mx-auto bg-gray-700 min-h-screen">
      <Header />
      <MainDetails />
      <Forecast />
    </div>
  );
}

export default App;
