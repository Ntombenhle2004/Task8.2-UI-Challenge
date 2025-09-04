import "./App.css";
import Logo from "./components/logo";
import Heading from "./components/heading";
import Paragraph from "./components/paragraph";
import Email from "./components/email";
import Row2Img from "./components/row2Img";

function App() {
  return (
    <>
      <Logo />
      <div className="mySection">
        <div className="row1">
          <Heading />
          <Paragraph />
          <Email />
        </div>

        <div className="row2">
          <Row2Img />
        </div>
      </div>
    </>
  );
}

export default App;
