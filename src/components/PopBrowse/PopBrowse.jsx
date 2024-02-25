import {  useParams } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar";
import {useState } from "react";
// import { useUser } from "../../hooks/useUser";
// import { AppRoutes } from "../../lib/appRoutes";
// import { deleteTasks, getTasks } from "../../api";

function PopBrowse() {
  const [selected, setSelected] = useState();
  // const { tasks, setTasks } = useUser();
  // const [error, setError] = useState(null);
  // const navigate = useNavigate();
  let { cardId } = useParams();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target; // Извлекаем имя поля и его значение
  //   setNewTask({
  //     ...newTask, // Копируем текущие данные из состояния
  //     [name]: value, // Обновляем нужное поле
  //   });
  // };

  // const [newTask, setNewTask] = useState({
  //   title: card.title,
  //   topic: card.topic,
  //   description: card.description,
  //   date: card.date,
  //   status: card.status,
  // });

  // useEffect(() => {
  //   saveTask(tasks.find((el) => el._id === cardId));
  // }, [tasks]);
  // const deleteCard = (id) => {
  //   deleteTasks(id).then(() => {
  //     getTasks().then((data) => {
  //       setTasks(data.tasks);
  //       navigate(AppRoutes.HOME);
  //     })
  //     .catch((error) => {
  //       if (error.message === "Возникли проблемы") {
  //         setError("У вас возникли проблемы")
  //       } else {
  //         setError(error.message);
  //       }
  //     });
  //   });
  // };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи:{cardId}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </div>
              </form>

              <Calendar selected={selected} setSelected={setSelected}/>

            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
