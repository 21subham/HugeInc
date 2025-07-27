import Header from "./components/header";
import Hugecube from "./components/hugecube";
import WhoWeAre from "./components/whoweare";
import Future from "./components/future";
import "./App.css";

function App() {
  return (
    <>
      <Header className="absolute" />
      <Hugecube />
      <WhoWeAre />
      <Future />
    </>
  );
}

export default App;
