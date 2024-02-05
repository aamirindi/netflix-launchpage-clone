import kid from "../assets/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";

export default function Kid() {
  return (
    <div className="kid">
      <div className="left">
        <img src={kid} alt="" />
      </div>
      <div className="right">
        <h1>Create profiles for kids</h1>
        <p>
          Send children on adventures with their favourite <br /> characters in
          a space made just for them—free with <br />
          your membership.
        </p>
      </div>
    </div>
  );
}
