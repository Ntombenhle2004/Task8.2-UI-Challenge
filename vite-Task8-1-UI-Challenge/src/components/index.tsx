export default function Index() {
  return (
    <div>
      <div className="mySection">
        <div className="row1">
          <img src="../assets/images/logo.svg" alt="logo" className="logo"></img>
          <h1 className="heading1">WE'RE</h1>
          <h1 className="heading2">COMING SOON</h1>
          <p className="paragraph">
            Hello fellow shoppers! We're currently building our new <br />{" "}
            fashion store. Add your email below to stay up-to -date with <br />
            announcements and our launch deals
          </p>
          <div className="email">
            <p>janeappleseed#email.com</p>
            <img src="../assets/images/icon-error.svg"></img>
            <img src="../assets/images/icon-arrow.svg"></img>
          </div>
          <p className="errorMsg">Please provide a valid email</p>
        </div>

        <div className="row2">
          <img src="../assets/images/hero-desktop.jpg"></img>
        </div>
      </div>
    </div>
  );
}
