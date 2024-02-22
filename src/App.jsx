import "./App.css";
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
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={userData} />}>
          <Route path={AppRoutes.HOME} element={<HomePage />} />
          <Route path={`${AppRoutes.CARD}/:cardId`} element={<CardPage />} />
          <Route path={AppRoutes.NEW_CARD} element={<NewCard />} />
          <Route
            path={AppRoutes.EXIT}
            element={<ExitPage setUserData={setUserData} />}
          />
        </Route>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
