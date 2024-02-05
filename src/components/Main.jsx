import netflix from "../assets/netflix-logo.svg";
import TextField from "@mui/material/TextField";
// import net from "../assets/net.svg";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="container"></div>
        <div className="header">
          <div className="left">
            <img src={netflix} alt="" />
          </div>
          <div className="right">
            {/* <img src={net} /> */}
            <select id="language" name="language">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button>Sign In</button>
          </div>
        </div>
        <div className="content">
          <div className="top">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="bottom">
            <TextField
              id="filled-basic"
              label="Email Address"
              variant="filled"
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                  width: "100%",
                  padding: "0px 10px",
                  border: ".5px solid #5c5c5c",
                  backgroundColor: "transparent",
                },
                classes: {
                  focused: "input-focused",
                },
              }}
            />
            <button type="submit">Get Started > </button>
          </div>
        </div>
      </div>
    </>
  );
}
