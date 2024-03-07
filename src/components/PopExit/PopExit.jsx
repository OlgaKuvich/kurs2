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

function PopExit() {
  return (
    <PopExitItem id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <PopExitGroup>
                <PopExitYes className="_hover01" id="exitYes">
                  <PopExitYesA>
                    <Link to={AppRoutes.LOGIN}>Да, выйти</Link>{" "}
                  </PopExitYesA>
                </PopExitYes>
                <PopExitNo className="_hover03" id="exitNo">
                  <PopExitNoA>
                    <Link to={AppRoutes.HOME}>Нет, остаться</Link>{" "}
                  </PopExitNoA>
                </PopExitNo>
              </PopExitGroup>
            </div>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitItem>
  );
}

export default PopExit;
