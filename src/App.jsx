import "./App.css";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { GlobalStyle } from "./Global.styled";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExitPage from "./pages/ExitPage";
import CardPage from "./pages/CardPage";
import NewCard from "./pages/NewCard";
import LoginPage from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import { AppRoutes } from "./lib/appRoutes";

function App() {
  let user = true;
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
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route
            path={AppRoutes.HOME}
            element={
              <HomePage
                isLoded={isLoded}
                cardList={cardList}
                addCard={addCard}
              />
            }
          />
          <Route path={`${AppRoutes.CARD}/:cardId`} element={<CardPage />} />
          <Route path={AppRoutes.NEW_CARD} element={<NewCard />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        </Route>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
