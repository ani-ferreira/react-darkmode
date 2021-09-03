import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Prueba from "./prueba";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [people, setPeople] = useState(data);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <main>
        <GlobalStyles />
        <section className="container">
          <h3>{people.length} birthdays</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
          <button onClick={() => themeToggler()}>Modo oscuro</button>
        </section>
      </main>{" "}
      <Prueba />
    </ThemeProvider>
  );
}

export default App;
