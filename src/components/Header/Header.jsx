import { useState } from "react";
import { Container } from "../Common/Common.styled";
import {
  HeaderBlock,
  HeaderBtnMain,
  HeaderItem,
  HeaderLogoDark,
  HeaderLogoImg,
  HeaderLogoLight,
  HeaderNav,
  HeaderPopUser,
  HeaderUser,
  PopUserButton,
  PopUserMail,
  PopUserName,
  PopUserTheme,
  PopUserThemeInput,
  PopUserThemeP,
} from "./Header.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((prev) => !prev);
  }
  return (
    <HeaderItem>
      <Container>
        <HeaderBlock>
          <HeaderLogoLight>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogoLight>
          <HeaderLogoDark>
            <a href="" target="_self">
              <HeaderLogoImg src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMain id="btnMainNew" onClick={addCard}>
              Создать новую задачу
            </HeaderBtnMain>

            <HeaderUser href="#" onClick={togglePopUp}>
              Ivan Ivanov
            </HeaderUser>

            {isOpened && (
              <HeaderPopUser
                //className="header__pop-user-set pop-user-set"
                //  id="user-set-target"
              >
                {/* <a href="">x</a> */}
                <PopUserName>Ivan Ivanov</PopUserName>
                <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
                <PopUserTheme>
                  <PopUserThemeP>Темная тема</PopUserThemeP>
                  <PopUserThemeInput type="checkbox" name="checkbox" />
                </PopUserTheme>
                <PopUserButton type="button" className="_hover03">
                  <Link to={AppRoutes.EXIT} onClick={togglePopUp}>Выйти</Link>
                </PopUserButton>
              </HeaderPopUser>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderItem>
  );
}

export default Header;
