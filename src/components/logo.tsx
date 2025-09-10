import logo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <div style={{display:"block", }}>
      <img src={logo} alt="logo" className="logo"></img>
    </div>
  );
}
