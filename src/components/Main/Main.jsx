import Column from "../Column/Column";
import { Container } from "../Common/Common.styled";
import { MainBlock, MainContent, MainItem } from "./Main.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoded }) {
  console.log(cardList)
  return (
    <MainItem>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoded
              ? "Loding..."
              : statusList.map((item) => (
                  <Column
                    key={item}
                    title={item}
                    cardList={cardList.filter((card) => card.status === item)}
                  />
                ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainItem>
  );
}

export default Main;
