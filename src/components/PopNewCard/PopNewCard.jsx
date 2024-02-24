import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import { useUser } from "../../hooks/useUser";
import { createTasks, getTasks } from "../../api";


function PopNewCard() {
  const [selected, setSelected] = useState();
  const { setTasks } = useUser();
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const addCard = async () => {
    let newCard = {
      ...newTask,
      date: selected,
    };

    createTasks(newCard).then(() => {
      getTasks().then(() => {
        setTasks();
        navigate(AppRoutes.HOME);
      });
    });
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={AppRoutes.HOME} className="pop-new-card__close">
              ✖
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    value={newTask.title}
                    onChange={handleInputChange}
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea 
                    value={newTask.description}
                    onChange={handleInputChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>

                <Calendar selected={selected} setSelected={setSelected}/>

            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">

{/* 
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div> */}
<div className="prod_checbox">
                  <div className="radio-toolbar">
                    <input
                      type="radio"
                      id="radio1"
                      name="topic"
                      value="Web Design"
                      onChange={handleInputChange}
                    />
                    <label className="_orange" htmlFor="radio1">
                      Web Design
                    </label>

                    <input
                      type="radio"
                      id="radio2"
                      name="topic"
                      value="Research"
                      onChange={handleInputChange}
                    />
                    <label className="_green" htmlFor="radio2">
                      Research
                    </label>

                    <input
                      type="radio"
                      id="radio3"
                      name="topic"
                      value="Copywriting"
                      onChange={handleInputChange}
                    />
                    <label className="_purple" htmlFor="radio3">
                      Copywriting
                    </label>
                </div>
              </div>
              
              </div>

            </div>
            <button onClick={addCard} className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PopNewCard;
