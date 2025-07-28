import Header from "./components/header";
import Hugecube from "./components/hugecube";
import WhoWeAre from "./components/whoweare";
import Future from "./components/future";
import "./App.css";
import WeBelieve from "./components/webelieve";
import EndCube from "./components/endcube";
import Squares from "./components/squares";
import Test from "./components/test";

function App() {
  return (
    <>
      <Header className="absolute" />
      <Hugecube />
      <WhoWeAre />
      <Future />
      <WeBelieve />

      <Squares />
      {/* <EndCube /> */}
      <Test />
    </>
  );
}

export default App;
