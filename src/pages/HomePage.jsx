import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
import PopExit from "../components/PopExit/PopExit";
import PopNewCard from "../components/PopNewCard/PopNewCard";
import Wrapper from "../components/Wrapper/Wrapper";
import { AppRoutes } from "../lib/appRoutes";

export default function HomePage({ addCard, isLoded, cards }) {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <Outlet />
        <Header addCard={addCard} />
        <Main isLoded={isLoded} cardList={cards} />
        <Link to={AppRoutes.LOGIN}>Войти</Link>
        <br />
        <Link to={AppRoutes.REGISTER}>Зарегистрироваться</Link>
        <br />
        <Link to={AppRoutes.EXIT}>Выйти</Link>
        <br />
        <Link to={AppRoutes.NEW_CARD}>Создать задачу</Link>
      </Wrapper>
    </>
  );
}
