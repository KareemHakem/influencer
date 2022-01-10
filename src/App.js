import Navigation from "./navigation";
import "./App.css";
import { Button } from "./commons/Button";
import { Loading } from "./commons/Loading";

function App() {
  return (
    <div>
      <Button loading={true} title={"View Profile"} />
      <Loading />
      <Navigation />
    </div>
  );
}

export default App;
