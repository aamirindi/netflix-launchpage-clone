import tv from "../assets/tv.png";
import tv_ from "../assets/NTFLX_CONTINUE_GIF_v6.gif";

export default function EnjoyTv() {
  return (
    <div className="enjoy">
      <div className="left">
        <h1>Enjoy on your TV</h1>
        <p>
          Watch on smart TVs, PlayStation, Xbox, Chromecast,
          <br />
          Apple TV, Blu-ray players and more.
        </p>
      </div>
      <div className="right">
        <img src={tv_} alt="" width="72%" />
        <img src={tv} alt="" width="100%" />
      </div>
    </div>
  );
}
