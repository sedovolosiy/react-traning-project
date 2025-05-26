import "./App.css";
import { useEffect, useReducer } from "react";
import chair from "./images/chair.png";
import table from "./images/table.png";
import sofa from "./images/sofa.png";

// вместо props.name и props.year используем деструктуризацию
// props - это объект, содержащий все переданные свойства
// в компонент Header, поэтому мы можем использовать деструктуризацию
// для извлечения нужных свойств напрямую в параметры функции
// props.name и props.year можно заменить на name и year
function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Room</h1>
      <p>Copyright: {year}</p>
    </header>
  );
}

const furniture = [
  { id: 1, name: "Chair", price: 50, image: chair },
  { id: 2, name: "Table", price: 150, image: table },
  { id: 3, name: "Sofa", price: 300, image: sofa },
];

function Main({ furniture, openStatus, toggle }) {
  // Если магазин закрыт, показываем минимальный интерфейс
  if (!openStatus) {
    return (
      <>
        <div>
          <h2>Sorry, we are closed.</h2>
        </div>
      </>
    );
  }

  // Если магазин открыт, показываем полный интерфейс
  return (
    <>
      <div>
        <h2>Welcome to my showroom!</h2>
      </div>
      <main>
        <button onClick={toggle}>Close Showroom</button>
        <ul>
          {furniture.map((item) => (
            <li style={{ listStyleType: "none" }} key={item.id}>
              <img src={item.image} height={100} alt={item.name} />
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((prevStatus) => !prevStatus, true);
  // useReducer позволяет более гибко управлять состоянием,
  // особенно если логика изменения состояния становится сложной
  // В данном случае мы просто переключаем статус между true и false
  // useState можно использовать, если логика изменения состояния проста
  // и не требует сложных операций

  useEffect(() => {
    console.log(`The showroom is ${status ? "open" : "closed"}.`);
  }, [status]);
  // useEffect позволяет выполнять побочные эффекты в функциональных компонентах
  // В данном случае мы выводим в консоль сообщение о статусе магазина
  // Второй аргумент - массив зависимостей, который указывает, что
  // эффект должен выполняться только при изменении статуса
  // Если массив зависимостей пустой, эффект выполняется только один раз
  // при монтировании компонента

  return (
    <div>
      <Header name="Serhii" year={new Date().getFullYear()} />
      <main>
        <p>The showroom is currently {status ? "open" : "closed"}</p>
        <button onClick={toggle}>{status ? "Close" : "Open"} Showroom </button>
      </main>
      <Main furniture={furniture} openStatus={status} toggle={toggle} />
    </div>
  );
}

export default App;
