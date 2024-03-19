import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { getTasks } from "../api";
import { useUser } from "../hooks/useUser";
import { useContext } from "react";
import { TasksContext } from "../contexts/tasks";

export default function HomePage() {
  const {userData} = useUser();
  const {tasks, setTasks} = useContext(TasksContext);
  const [isLoded, setIsLoded] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  
  useEffect(() => {
    getTasks({token: userData.token})
    .then((data) => {
      setTasks(data.tasks);
    })
    .catch((error) => {
      setGetCardsError(error.message);
    })
    .then(() => {
      setIsLoded(false);
    });
  }, [userData]);

  function addCard() {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        theme: "Web Design",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса",
      },
    ]);
  }
  return (
    <>
      <Wrapper>
        <Outlet />
        <Header addCard={addCard} user={userData} />
        {getCardsError ? (
          <p style={{ color: "red",  weight: 400, size: 14 }}>{getCardsError}</p>
        ) : (
        <Main isLoded={isLoded} cardList={tasks} />
        )}
      </Wrapper>
    </>
  );
}
