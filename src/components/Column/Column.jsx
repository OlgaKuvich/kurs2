import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card name={"Web Design"} 
        theme={"Название задачи"}
        date={"15.12.2023"}
        /> 
          <Card name={"Research"} 
        theme={"Название задачи"}
        date={"16.12.2023"}
        /> 
          <Card name={"Web Design"} 
        theme={"Название задачи"}
        date={"17.12.2023"}
        /> 
          <Card name={"Research"} 
        theme={"Название задачи"}
        date={"18.12.2023"}
        /> 

      </div>
    </div>
  );
}

export default Column;
