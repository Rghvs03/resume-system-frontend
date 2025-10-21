import React from "react";
import LandingPage from "./components/LandingPage";
import AppRouter from "./Routes/AppRouter";
import Navigation from "./Routes/Navigation";

const App = () => {
  return (
    <div>
      <Navigation/>
      <AppRouter/>
    </div>
  );
};

export default App;
