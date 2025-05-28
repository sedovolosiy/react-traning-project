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
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              {name}'s Furniture Showroom
            </h1>
            <p className="text-indigo-100 text-lg">
              Premium furniture collection
            </p>
          </div>
          <div className="text-right">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-indigo-200">
          © {year} All rights reserved
        </div>
      </div>
    </header>
  );
}

const furniture = [
  {
    id: 1,
    name: "Modern Chair",
    price: 50,
    image: chair,
    description: "Comfortable ergonomic design",
    category: "Seating",
  },
  {
    id: 2,
    name: "Dining Table",
    price: 150,
    image: table,
    description: "Elegant wooden dining table",
    category: "Tables",
  },
  {
    id: 3,
    name: "Luxury Sofa",
    price: 300,
    image: sofa,
    description: "Premium comfort sofa",
    category: "Seating",
  },
];

function FurnitureCard({ item, index }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <img
          src={item.image}
          className="w-full h-48 object-contain mx-auto transform hover:scale-110 transition-transform duration-300 relative z-10"
          alt={item.name}
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 gradient-text">
          {item.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-indigo-600">
              ${item.price}
            </span>
            <span className="text-xs text-gray-500">Best Price</span>
          </div>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg btn-hover-scale">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Main({ furniture, openStatus, toggle }) {
  // Если магазин закрыт, показываем минимальный интерфейс
  if (!openStatus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md mx-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔒</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We're Closed
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, our showroom is currently closed. Please come back later!
          </p>
          <button
            onClick={toggle}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Open Showroom
          </button>
        </div>
      </div>
    );
  }

  // Если магазин открыт, показываем полный интерфейс
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Currently Open
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Showroom!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium furniture collection designed for modern living
          </p>
        </div>

        {/* Control Button */}
        <div className="text-center mb-12">
          <button
            onClick={toggle}
            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Close Showroom
          </button>
        </div>

        {/* Furniture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furniture.map((item, index) => (
            <FurnitureCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
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
    <div className="min-h-screen bg-gray-50">
      <Header name="Serhii" year={new Date().getFullYear()} />

      {/* Status Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  status ? "bg-green-500 animate-pulse" : "bg-red-500"
                }`}
              ></div>
              <span className="text-lg font-medium text-gray-700">
                Showroom is currently{" "}
                <span className={status ? "text-green-600" : "text-red-600"}>
                  {status ? "OPEN" : "CLOSED"}
                </span>
              </span>
            </div>
            <button
              onClick={toggle}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                status
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {status ? "Close" : "Open"} Showroom
            </button>
          </div>
        </div>
      </div>

      <Main furniture={furniture} openStatus={status} toggle={toggle} />
    </div>
  );
}

export default App;
