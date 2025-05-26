import "./App.css";
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

function Main({ furniture }) {
  return (
    <>
      <div>
        <h2>Welcome to my showroom!</h2>
      </div>
      <main>
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
  return (
    <div>
      <Header name="Serhii" year={new Date().getFullYear()} />
      <main>
        <p>There are a lot of furnitures in the room.</p>
      </main>
      <Main furniture={furniture} />
    </div>
  );
}

export default App;
