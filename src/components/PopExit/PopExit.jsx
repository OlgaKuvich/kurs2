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
            {/*"pop-exit__form" - нет такого класса в стилях App.css */}
            <PopExitGroup>
              <PopExitYes id="exitYes">
                <PopExitYesA href="modal/signin.html">Да, выйти</PopExitYesA>{" "}
              </PopExitYes>
              <PopExitNo id="exitNo">
                <PopExitNoA href="main.html">Нет, остаться</PopExitNoA>{" "}
              </PopExitNo>
            </PopExitGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitItem>
  );
}

export default PopExit;
