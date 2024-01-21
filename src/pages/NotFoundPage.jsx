import { Link } from "react-router-dom";
import { GlobalStyle } from "../Global.styled";
import { AppRoutes } from "../lib/appRoutes";
import styled from "styled-components";

const Item = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export default function NotFoundPage() {
  return (
    <>
      <GlobalStyle />
      <Item>
        <title>Ошибка 404. Страница не найдена</title>
        <Link to={AppRoutes.HOME}>Вернуться на главную</Link>
      </Item>
    </>
  );
}
