import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { GlobalStyle } from "./Global.styled";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoded, setIsLoded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoded(false);
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: "Web Design",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса",
      },
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        <Main isLoded={isLoded} cardList={cards} />
      </Wrapper>
    </>
  );
}

export default App;
