import React from "react";
import { Header, AboutMe, MySkills, MyProyect } from "./const/index";
import { Contact } from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Contact />
      <MySkills />
      <MyProyect />
    </>
  );
}

export default App;
