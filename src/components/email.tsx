import errorIcon from "../assets/images/icon-error.svg";
import Arrow from "../assets/images/icon-arrow.svg";

export default function Email() {
  return (
    <>
      <div className="Email">
        <div className="email">
          <input
            type="text"
            className="gmail"
            placeholder="Email Address"
          ></input>
          <img src={errorIcon} alt="errorIcon" className="errorIcon"></img>
          <img src={Arrow} alt="Arrow" className="Arrow"></img>
        </div>
      </div>
      <p className="errorMsg">Please provide a valid email</p>
    </>
  );
}
