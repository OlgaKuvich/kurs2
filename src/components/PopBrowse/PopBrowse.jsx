import { Link, useNavigate, useParams } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar";
import { useContext, useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { AppRoutes } from "../../lib/appRoutes";
import { deleteTasks, editTasks, getTasks } from "../../api";
import { TasksContext } from "../../contexts/tasks";

function PopBrowse() {
  const [selected, setSelected] = useState();
  const { tasks, setTasks } = useContext(TasksContext);
  const { userData } = useUser();
  const [saveValue, setSaveValue] = useState({});
  const navigate = useNavigate();
  let { cardId } = useParams();

  const [isEdit, setIsEdit] = useState(false);

  const cancelClick = () => {
    // setModalData(saveValue)
    setSaveValue({});
    setIsEdit(false);
  };

  const card = tasks.find((task) => task._id === cardId);

  const [status, setStatus] = useState(card.status);

  const [newTask, setNewTask] = useState({
    title: card.title,
    topic: card.topic,
    description: card.description,
    date: selected,
    status: card.status,
  });

  console.log(isEdit);

  const handleEditMode = () => {
    const newCards = tasks.map((item) => {
      if (item._id === cardId) {
        return {
          ...item,
          ...newTask,
          status: status,
        };
      }
      return item;
    });
    setTasks(newCards);
    setIsEdit(!isEdit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  let nowDate = new Date(newTask.date).toLocaleString();
  console.log(nowDate);
  // console.log(newTask.date);
  // console.log(newTask);

  const deleteCard = (id) => {
    deleteTasks(id)
      .then((data) => {
        setTasks(data.tasks);
        navigate(AppRoutes.HOME);
      })
      .catch(() => {
        throw new Error("Возникли проблемы с удалением");
      });
  };

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const aditCard = async () => {
    let newCard = {
      ...newTask,
      data: selected,
    };
    console.log(newCard);
    await  editTasks({
      id: cardId,
      token: userData.token,
      title: newCard.title,
      topic: newCard.topic,
      status: newCard.status,
      description: newCard.description,
    });
    getTasks({ token: userData.token }).then((data) => {
      setTasks(data.tasks);
    });
  };

  useEffect(() => {
    setNewTask({
      ...newTask,
      date: selected,
    });
  }, [selected]);

  function editTaskHandler() {
    setIsEdit(true);
  }

  return (
    <>
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">
                  Название задачи:{card.title}
                </h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">{card.topic}</p>
                </div>
              </div>

              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>

                <div className="status__themes">
                  {/* 
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
              </div> */}

                  {isEdit ? (
                    statuses.map((el, item) => (
                      <div
                        onClick={() => setStatus(el)}
                        key={item}
                        className={`status__theme ${
                          el === status ? "_gray" : ""
                        }`}
                      >
                        <p>{el}</p>
                      </div>
                    ))
                  ) : (
                    <div className="status__theme_gray">
                      <p>{card.status}</p>
                    </div>
                  )}
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
                        value={newTask.description}
                        disabled={!isEdit}
                        onChange={handleInputChange}
                        className="form-browse__area"
                        name="description"
                        id="textArea01"
                        readOnly=""
                        placeholder="Введите описание задачи..."
                        defaultValue={""}
                      />
                    </div>
                  </form>

                  <Calendar
                    disabled={!isEdit}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>

                <div className="theme-down__categories theme-down">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>

                <div className="pop-browse__btn-browse ">
                  {!isEdit && (
                    <>
                      <div className="btn-group">
                        <button
                          onClick={editTaskHandler}
                          className="btn-browse__edit _btn-bor _hover03"
                        >
                          Редактировать задачу
                        </button>
                        <button
                          onClick={() => {
                            deleteCard(cardId);
                          }}
                          className="btn-browse__delete _btn-bor _hover03"
                        >
                          Удалить задачу
                        </button>
                      </div>
                      <Link to={AppRoutes.HOME}>
                        <button className="btn-browse__close _btn-bg _hover01">
                          <a href="#">Закрыть</a>
                        </button>
                      </Link>
                    </>
                  )}
                </div>

                <div
                  className={"pop-browse__btn-edit " + (isEdit ? "" : "_hide")}
                >
                  {/* {isEdit && <>  */}
                  <div className="btn-group">
                    <button
                      className="btn-edit__edit _btn-bg _hover01"
                      onClick={aditCard}
                    >
                      Сохранить
                    </button>
                    <button
                      className="btn-edit__edit _btn-bor _hover03"
                      onClick={cancelClick}
                    >
                      Отменить
                    </button>
                    <button
                      onClick={() => {
                        deleteCard(cardId);
                      }}
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                    >
                      Удалить задачу
                    </button>
                  </div>
                  <Link to={AppRoutes.HOME}>
                    <button className="btn-edit__close _btn-bg _hover01">
                      Закрыть
                    </button>
                  </Link>
                  {/* </>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopBrowse;
