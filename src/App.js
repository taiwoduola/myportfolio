import "./App.css";

//components
import Nav from "./components/nav/nav.component.jsx";
import HeroPage from "./components/heropage/heropage.component";

function App() {
  return (
    <div className="App">
      {/* navigation */}
      <Nav />

      {/* hero page */}
      <HeroPage />
    </div>
  );
}

export default App;
