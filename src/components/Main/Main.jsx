import Column from "../Column/Column";
import { Container } from "../Common/Common.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoded }) {
  return (
    <main className="main">
      <Container>
        <div className="main__block">
          <div className="main__content">
            {isLoded
              ? "Loding..."
              : statusList.map((item) => (
                  <Column
                    key={item}
                    title={item}
                    cardList={cardList.filter((card) => card.status === item)}
                  />
                ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Main;
