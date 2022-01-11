import Navigation from "./navigation";
import "./App.css";
import { Button } from "./commons/Button";
import { Loading } from "./commons/Loading";
import Input from "./commons/Input";
import Avatars from "./commons/Avatar";

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
        hight={50}
        margin={"100px"}
      />
      <Avatars
        image="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
        name="Facebook"
        width={50}
        height={50}
      />
    </div>
  );
}

export default App;
