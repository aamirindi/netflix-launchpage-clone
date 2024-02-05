import device from "../assets/device-pile-in.png";
import phone from "../assets/1651674395737.gif";

export default function Watch() {
  return (
    <div className="watch">
      <div className="left">
        <h1>Watch everywhere</h1>
        <p>
          Stream unlimited movies and TV shows on your <br />
          phone, tablet, laptop, and TV.
        </p>
      </div>
      <div className="right">
        <img src={phone} alt="" width="60%" />
        <img src={device} alt="" width="90%" />
      </div>
    </div>
  );
}
