import "../src/sass/app.scss";
import logo from "./assets/images/photosnap.svg";
import Jobs from "./components/jobs/Index";

function App() {
  return (
    <div className="appContainer">
      <img src={logo} alt="" />
      <header className="bg-header"></header>
      <div className="bg-subheader"></div>
      <Jobs />
    </div>
  );
}

export default App;
