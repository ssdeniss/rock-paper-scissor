import Header from "./components/header/Header";
import Settings from "./components/settings/Settings";
import Main from "./pages/Main";
import "./styles/index.scss";

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <Main />
        <Settings />
      </div>
    </>
  );
}

export default App;
