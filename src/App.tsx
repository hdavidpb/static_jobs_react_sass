import "../src/sass/app.scss";
import Jobs from "./components/jobs/Index";

function App() {
  return (
    <div className="appContainer">
      <header className="bg-header"></header>
      <div className="bg-subheader"></div>
      <Jobs />
    </div>
  );
}

export default App;
