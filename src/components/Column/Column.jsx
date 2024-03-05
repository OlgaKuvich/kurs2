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
            id={card._id}
            title={card.title}
            topic={card.topic}
            date={card.date}
            status={card.status}
            key={card._id}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
}

export default Column;
