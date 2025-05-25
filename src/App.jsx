import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Room</h1>
      <p>Copyright: {props.year}</p>
    </header>
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
    </div>
  );
}

export default App;
