import "./App.css";
import Logo from "./components/logo";
import Heading from "./components/heading";
import Paragraph from "./components/paragraph";
import Email from "./components/email";
// import Row2Img from "./components/row2Img";

function App() {
  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
}

const Mobile = () => {
  return (
    <>
      <div className="mySection mobile row1">
        <Logo />
        <div className="row2">{/* <Row2Img /> */}</div>
        <Heading />
        <Paragraph />
        <Email />
      </div>
    </>
  );
};

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="mySection">
        <div className="row1">
          <Logo />
          <Heading />
          <Paragraph />
          <Email />
        </div>

        <div className="row2">{/* <Row2Img /> */}</div>
      </div>
    </div>
  );
};
export default App;
