import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Wrapper from "../components/Wrapper/Wrapper";
import { cardList } from "../data";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoded, setIsLoded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoded(false);
    }, 1000);
  }, []);

  const [cards, setCards] = useState(cardList);
  useEffect(() => {
    setCards(cardList);
  }, [cards]);

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
      <Wrapper>
        <Outlet />
        <Header addCard={addCard} />
        <Main isLoded={isLoded} cardList={cards} />
      </Wrapper>
    </>
  );
}
