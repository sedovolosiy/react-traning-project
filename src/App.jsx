import "./App.css";

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
  { id: 1, name: "Chair", price: 50 },
  { id: 2, name: "Table", price: 150 },
  { id: 3, name: "Sofa", price: 300 },
];

function Main({ furniture }) {
  return (
    <main>
      <h2>Furniture List</h2>
      <ul>
        {furniture.map((item) => (
          <li style={{ listStyleType: "none" }} key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header name="Serhii" year={new Date().getFullYear()} />
      <main>
        <h2>Welcome to my room!</h2>
        <p>This is a simple React application.</p>
      </main>
      <Main furniture={furniture} />
    </div>
  );
}

export default App;
