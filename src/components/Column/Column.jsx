import Card from "../Card/Card";
import {
  ColumnCards,
  ColumnTitle,
  ColumnTitleP,
  MainColumn,
} from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <ColumnCards>
        {cardList.map((card) => (
          <Card
            id={card.id}
            name={card.title}
            theme={card.theme}
            date={card.date}
            key={card.id}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
}

export default Column;
