import mob from "../assets/mobile-0819.jpg";
// import DownloadIcon from "@mui/icons-material/Download";
import download from "../assets/Animation on a concept draft downloads.gif";

export default function DownloadShow() {
  return (
    <div className="download-show">
      <div className="left">
        <img src={mob} alt="" width="90%" />
        <div className="label">
          <div className="img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
          </div>
          <p>
            Stranger Things <br />
            <span>Downloading...</span>
          </p>
          <div className="icon">
            <img src={download} alt="" width="100%" />
          </div>
        </div>
      </div>
      <div className="right">
        <h1>
          Download your shows <br />
          to watch offline
        </h1>
        <p>
          Save your favourites easily and always have
          <br />
          something to watch.
        </p>
      </div>
    </div>
  );
}
