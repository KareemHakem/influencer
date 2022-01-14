import Navigation from "./navigation";
import "./App.css";
import NavBar from "./components/NavBar";
import InfluencerCard from "./components/InfluencerCard";

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <NavBar
        image="https://variety.com/wp-content/uploads/2020/08/ap_19339677695734.jpg"
        userName="Kareem Mohamed"
      />

      <div style={{ marginTop: 200, marginLeft: 100 }}>
        <InfluencerCard
          image="https://variety.com/wp-content/uploads/2020/08/ap_19339677695734.jpg"
          influencerName="Kareem Mohamed"
        />
      </div>
    </div>
  );
}

export default App;
