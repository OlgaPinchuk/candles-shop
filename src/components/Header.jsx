// Project files
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <img
        className="logo"
        width="97"
        height="30"
        src={logo}
        alt="The candle shop logo"
      />
    </header>
  );
}
