import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Section from "./components/Section/Section";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        <Header />
        <Article />
        <Section />
        <Main />
    </div>
  );
}

export default App;
