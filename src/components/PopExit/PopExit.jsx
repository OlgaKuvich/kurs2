import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitGroup,
  PopExitItem,
  PopExitNo,
  PopExitNoA,
  PopExitTtl,
  PopExitYes,
  PopExitYesA,
} from "./PopExit.styled";

function PopExit({ toggleIsLoggedIn }) {
  return (
    <PopExitItem id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            {/*"pop-exit__form" - нет такого класса в стилях App.css */}
            <PopExitGroup>
              <PopExitYes id="exitYes">
                <PopExitYesA>
                  <Link to={AppRoutes.LOGIN} onClick={toggleIsLoggedIn}>
                    Да, выйти
                  </Link>{" "}
                </PopExitYesA>
              </PopExitYes>
              <PopExitNo id="exitNo">
                <PopExitNoA>
                  <Link to={AppRoutes.HOME}>Нет, остаться</Link>{" "}
                </PopExitNoA>
              </PopExitNo>
            </PopExitGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitItem>
  );
}

export default PopExit;
