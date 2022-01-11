import Navigation from "./navigation";
import "./App.css";
import { Button } from "./commons/Button";
import { Loading } from "./commons/Loading";
import Input from "./commons/Input";

function App() {
  return (
    <div>
      <Navigation />
      <Button loading={false} title={"View Profile"} />
      <Loading type="spinningBubbles" height={100} width={200} />

      <Input
        variant="standard"
        label="Name"
        width={200}
        hight={100}
        margin={"100px"}
      />
    </div>
  );
}

export default App;
